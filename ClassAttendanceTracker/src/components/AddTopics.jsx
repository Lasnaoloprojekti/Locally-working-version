import React, { useState, useEffect } from "react";
import { createTopic, deleteTopic, getTopics } from "../Hooks/ApiHooks";

const AddTopics = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [newTopicName, setNewTopicName] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    isError: false,
  });

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const fetchedTopics = await getTopics();
      setTopics(fetchedTopics);
    } catch (error) {
      console.error("Error fetching topics:", error);
      setAlert({
        show: true,
        message: "Failed to fetch topics.",
        isError: true,
      });
    }
  };

  const handleNewTopicChange = (e) => {
    setNewTopicName(e.target.value);
  };

  const handleTopicSelectChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newTopicName) {
      setAlert({
        show: true,
        message: "Please enter a topic name.",
        isError: true,
      });
      return;
    }

    if (window.confirm("Are you sure you want to add this topic?")) {
      try {
        await createTopic({ name: newTopicName });
        setNewTopicName("");
        fetchTopics();
        setAlert({
          show: true,
          message: "Topic added successfully!",
          isError: false,
        });
        setTimeout(
          () => setAlert({ show: false, message: "", isError: false }),
          5000
        );
      } catch (error) {
        console.error("Error adding topic:", error);
        setAlert({
          show: true,
          message: "Failed to add topic. Please try again.",
          isError: true,
        });
        setTimeout(
          () => setAlert({ show: false, message: "", isError: false }),
          5000
        );
      }
    }
  };

  const handleDeleteTopic = async () => {
    if (!selectedTopic) {
      setAlert({
        show: true,
        message: "Please select a topic to delete.",
        isError: true,
      });
      return;
    }

    if (window.confirm("Are you sure you want to delete this topic?")) {
      try {
        await deleteTopic(selectedTopic);
        fetchTopics();
        setSelectedTopic("");
        setAlert({
          show: true,
          message: "Topic deleted successfully!",
          isError: false,
        });
        setTimeout(
          () => setAlert({ show: false, message: "", isError: false }),
          5000
        );
      } catch (error) {
        console.error("Error deleting topic:", error);
        setAlert({
          show: true,
          message: "Failed to delete topic. Please try again.",
          isError: true,
        });
        setTimeout(
          () => setAlert({ show: false, message: "", isError: false }),
          5000
        );
      }
    }
  };

  return (
    <div className="min-h-screen w-full items-center flex flex-col px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center font-medium text-xl mb-4 font-roboto-slab">
          Topic Management
        </div>
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
          {/* Add Topic Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="newTopicName"
                className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                New Topic Name:
              </label>
              <input
                type="text"
                id="newTopicName"
                value={newTopicName}
                onChange={handleNewTopicChange}
                className="border border-gray-300 p-3 rounded-lg block w-full font-open-sans"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 w-full p-3 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Add Topic
              </button>
            </div>
          </form>

          {/* Delete Topic Dropdown */}
          <div className="mt-5">
            <label
              htmlFor="topicSelect"
              className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
              Select a Topic to Delete:
            </label>
            <select
              id="topicSelect"
              value={selectedTopic}
              onChange={handleTopicSelectChange}
              className="border border-gray-300 p-3 rounded-lg block w-full mb-4 font-open-sans">
              <option value="">Select Topic</option>
              {topics.map((topic) => (
                <option key={topic._id} value={topic._id}>
                  {topic.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleDeleteTopic}
              className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg py-3 px-4 shadow-lg focus:outline-none focus:ring focus:border-red-700">
              Delete Selected Topic
            </button>
          </div>

          {/* Alert Message */}
          {alert.show && (
            <div
              className={`mt-4 p-4 rounded-md transition-all ${
                alert.isError
                  ? "bg-red-100 border border-red-400 text-red-800"
                  : "bg-green-100 border border-green-400 text-green-800"
              }`}>
              <p>{alert.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTopics;
