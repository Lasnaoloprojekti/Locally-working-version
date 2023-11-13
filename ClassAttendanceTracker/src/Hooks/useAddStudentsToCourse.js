import axios from 'axios';

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

export default useAddStudentsToCourse;
