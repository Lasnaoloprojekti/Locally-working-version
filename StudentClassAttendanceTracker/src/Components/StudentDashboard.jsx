import React, { useState, useEffect } from "react";
import QRscanner from "react-qr-scanner";
import SuccessGif from "../assets/registering.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const StudentDashboard = () => {
  const [studentNumber, setStudentNumber] = useState(
    localStorage.getItem("studentnumber")
  );

  const [registerMessage, setRegisterMessage] = useState("");
  const [participationData, setParticipationData] = useState(null);
  const [showScanner, setShowScanner] = useState(false);
  const [isProcessingScan, setIsProcessingScan] = useState(false);
  const [showSuccessGif, setShowSuccessGif] = useState(false);
  const [showGdprModal, setShowGdprModal] = useState(false);
  const [showDeclineMessage, setShowDeclineMessage] = useState("");

  //
  useEffect(() => {
    const checkStudentAndConsent = async () => {
      try {
        const response = await axios.get(
          `https://student.northeurope.cloudapp.azure.com/api/student/gdprConsent/${studentNumber}`
        );
        if (!response.data.exists || !response.data.gdprConsent) {
          setShowGdprModal(true);
        }
      } catch (error) {
        console.error(
          "Error checking student existence and GDPR consent:",
          error
        );
      }
    };

    checkStudentAndConsent();
  }, [studentNumber]); // Also, make sure to include studentNumber in the dependencies array

  const handleAgree = async () => {
    const response = await axios.put(
      `https://student.northeurope.cloudapp.azure.com/api/student/updateConsent/${studentNumber}`
    );
    //console.log("Student consent updated", response.data);
    setShowGdprModal(false);
  };

  const handleDecline = async () => {
    try {
      const response = await axios.delete(
        `https://student.northeurope.cloudapp.azure.com/api/student/delete/${studentNumber}`
      );
      setShowDeclineMessage(
        "Your data has now been deleted from our database and courses, you are now redirected back to the login page."
      );
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("UserId");
        localStorage.removeItem("studentnumber");
        window.location.reload();
      }, 4000); // 1000 milliseconds = 1 second
    } catch (error) {
      console.error("Error in deleting student data:", error);
    }
  };

  const GDPRModal = ({ onAgree, onDecline }) => {
    const [showDataInfo, setShowDataInfo] = useState(false);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white max-w-[40%] p-2 rounded-lg shadow-xl">
          <h2 className="text-xl font-bold mb-4 font-roboto-slab">
            We value your privacy
          </h2>
          <p className=" font-open-sans">
            By clicking "I Agree", you allow us to use your data for collecting
            participation rates on courses. By clicking "I Decline" your data is
            immediately deleted from our database{" "}
          </p>

          <div
            className="mt-2 text-blue-600 cursor-pointer"
            onClick={() => setShowDataInfo(!showDataInfo)}>
            See what information we are saving
          </div>

          {showDataInfo && (
            <div className="p-3 bg-gray-100 rounded mt-2">
              <ul>
                <li>Username</li>
                <li>Lastname</li>
                <li>Firstname</li>
                <li>StudentNumber</li>
              </ul>
            </div>
          )}

          <div className="flex justify-end mt-4">
            <button
              onClick={onDecline}
              className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 font-open-sans">
              I Decline
            </button>
            <button
              onClick={onAgree}
              className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded font-open-sans">
              I Agree
            </button>
          </div>
          <p className=" text-red-600 mt-4">{showDeclineMessage}</p>
        </div>
      </div>
    );
  };

  const handleScanQrCode = async (data) => {
    if (data && !isProcessingScan) {
      setIsProcessingScan(true);

      try {
        const qrCodeText = data.text;
        //console.log("teksti qr koodista ", qrCodeText);
        const response = await fetch(
          "https://student.northeurope.cloudapp.azure.com/api/qrcoderegistration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              studentNumber,
              qrCodeIdentifier: qrCodeText,
            }),
          }
        );

        if (!response.ok) {
          const result = await response.json();
          throw new Error(result.message || response.statusText);
        }

        const result = await response.json();
        setRegisterMessage(result.message);
        setShowSuccessGif(true);
        setShowScanner(false); // Close the scanner as the registration is successful
      } catch (error) {
        console.error(error);
        setRegisterMessage(error.message || "Error during registration");
      } finally {
        setIsProcessingScan(false);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const fetchParticipationData = async () => {
    try {
      const response = await fetch(
        `https://student.northeurope.cloudapp.azure.com/api/participation/${studentNumber}`
      );
      const data = await response.json();
      //console.log("participation data fetched", data);
      setParticipationData(data);
    } catch (error) {
      console.error("Error fetching participation data:", error);
      // Handle error
    }
  };

  const ParticipationTable = ({ data }) => {
    if (data.length === 0) {
      return (
        <p className="text-center text-lg text-gray-700 mt-4">
          No participation data available currently!
        </p>
      );
    }

    return (
      <table className="max-w-4xl w-full table-auto mt-7 place-self-center">
        <thead className="bg-blue-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-open-sans">
              Course
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-open-sans">
              Topic
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-open-sans">
              Your Participation Rate
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-700">
          {data.map((courseData, courseIndex) =>
            Object.entries(courseData.participation).map(
              ([topic, rate], topicIndex) => (
                <tr key={courseIndex + "-" + topicIndex}>
                  {topicIndex === 0 && (
                    <td
                      className="px-6 py-4 whitespace-nowrap font-roboto-slab"
                      rowSpan={Object.keys(courseData.participation).length}>
                      {courseData.courseName}
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap font-roboto-slab">
                    {topic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{rate}</td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex flex-col justify-center mt-8">
      {showGdprModal && (
        <GDPRModal onAgree={handleAgree} onDecline={handleDecline} />
      )}
      <div className="max-w-4xl w-full place-self-center bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Enter your student number:
          </label>
          <input
            type="text"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            placeholder="Enter Student Number"
            className="border border-gray-300 p-3 rounded-lg block w-full mb-4"
          />
        </div>
        <div className="flex flex-col justify-between items-center">
          <button
            onClick={fetchParticipationData}
            className="px-4 mb-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Show Participation Rates
          </button>
          <button
            className="px-4 mb-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg transition-colors"
            onClick={() => setShowScanner(!showScanner)}>
            {showScanner ? "Hide Scanner" : "Scan QR Code"}
          </button>
        </div>
        {showScanner && (
          <QRscanner
            delay={300}
            style={{ width: "100%" }}
            onError={handleError}
            onScan={handleScanQrCode}
          />
        )}
        <p
          className={`mt-6 text-center text-xl ${
            registerMessage.includes("registered")
              ? "text-green-600"
              : "text-red-600"
          }`}>
          {registerMessage}
        </p>
        {showSuccessGif && registerMessage.includes("registered") && (
          <div className="text-center mt-4 flex justify-center">
            <img
              className="justify-center h-[8rem] rounded-lg"
              src={SuccessGif}
              alt="Registration Successful"
            />
          </div>
        )}
      </div>
      {participationData && <ParticipationTable data={participationData} />}
    </div>
  );
};
export default StudentDashboard;
