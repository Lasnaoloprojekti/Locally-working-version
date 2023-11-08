import axios from "axios";

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
