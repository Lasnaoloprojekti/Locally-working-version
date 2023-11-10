import axios from 'axios';

const useDeleteCourse = () => {
  const deleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/courses/${courseId}`, {
        withCredentials: true
      });
      return response; // This will be an HTTP response object
    } catch (error) {
      throw error; // Rethrow the error to be handled by the caller
    }
  };

  return deleteCourse;
};

export default useDeleteCourse;
