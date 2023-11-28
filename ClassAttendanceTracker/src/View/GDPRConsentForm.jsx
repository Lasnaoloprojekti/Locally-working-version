import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext.jsx";
import { submitGdprConsent } from "../Hooks/ApiHooks.js"; // Import the function

const GDPRConsentForm = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const navigate = useNavigate();

  const { userInfo } = useContext(userContext); // Use context to get userInfo

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!gdprConsent) {
      alert("You must consent to the data policy to continue.");
      return;
    }

    try {
      const userId = userInfo.userId; // Get userId from userInfo
      await submitGdprConsent(userId, studentNumber, gdprConsent);
      navigate("/studenthome");
    } catch (error) {
      console.error("Failed to save GDPR consent and student number:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center mb-4">GDPR Consent Form</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="studentNumber"
            className="block text-gray-700 text-sm font-bold mb-2">
            Student Number:
          </label>
          <input
            id="studentNumber"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="gdprConsent"
            className="block text-gray-700 text-sm font-bold mb-2">
            I consent to Metropolia collecting and storing my personal data:
          </label>
          <input
            id="gdprConsent"
            type="checkbox"
            className="mr-2 leading-tight"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GDPRConsentForm;
