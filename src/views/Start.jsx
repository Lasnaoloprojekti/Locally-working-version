import CourseForm from "../components/CourseForm";
import { motion } from "framer-motion";

const Start = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <CourseForm />
    </motion.div>
  );
};

export default Start;
