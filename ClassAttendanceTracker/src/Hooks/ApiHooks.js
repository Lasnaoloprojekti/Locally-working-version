import axios from "axios";

const createCourse = async (courseData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/createcourse",
      courseData,
      { withCredentials: true }
    );
    return response.data; // Return the response data from the API call
  } catch (error) {
    throw error; // Throw the error if the API call fails
  }
};

const useDeleteCourse = () => {
  const deleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/courses/${courseId}`,
        {
          withCredentials: true,
        }
      );
      return response; // This will be an HTTP response object
    } catch (error) {
      throw error; // Rethrow the error to be handled by the caller
    }
  };

  return deleteCourse;
};

const selectCourse = async (userId) => {

  try {
    const response = await axios.get(`http://localhost:3001/selectcourse`, {
      headers: {
        'userId': userId,  // Pass the user's ID in the request headers
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const createSession = async (sessionData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/createsession",
      sessionData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchParticipationRates = async (courseId) => {
  try {
    const response = await axios.get(`http://localhost:3001/participations/${courseId}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const createTopic = async (topicData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/addtopic",
      topicData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTopics = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/topics", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteTopic = async (topicId) => {
  try {
    const response = await axios.delete(`http://localhost:3001/api/topics/${topicId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useAddStudentsToCourse = () => {
  const addStudents = async (courseId, studentsData) => {
    try {
      const response = await axios.post('http://localhost:3001/addstudents', {
        courseId,
        studentsToAdd: studentsData
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return addStudents;
};

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/users", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addTeacherToCourse = async (courseId, userId) => {
  try {
    const response = await axios.post("http://localhost:3001/addTeacherToCourse", {
      courseId,
      userId,
    }, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  createCourse,
  useDeleteCourse,
  selectCourse,
  useAddStudentsToCourse,
  createSession, fetchParticipationRates,
  createTopic,
  getTopics,
  deleteTopic, getUsers, addTeacherToCourse
};
