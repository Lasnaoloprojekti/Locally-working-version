import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GDPRConsentForm = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!gdprConsent) {
      // Alert the user that they must give consent
      alert("You must consent to the data policy to continue.");
      return;
    }

    try {
      // POST to your backend endpoint to save the student number and GDPR consent
      await axios.post("http://localhost:3001/api/students", {
        studentNumber,
        gdprConsent,
      });

      // Navigate to the student home
      navigate("/studenthome");
    } catch (error) {
      console.error("Failed to save GDPR consent and student number:", error);
      // Handle error (show error message to user)
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
