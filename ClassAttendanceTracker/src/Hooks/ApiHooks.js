import axios from "axios";

export const createCourse = async (courseData) => {
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

export const selectCourse = async () => {
  try {
    const response = await axios.get("http://localhost:3001/selectcourse", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default selectCourse;
