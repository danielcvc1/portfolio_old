import "./index.css";
import { motion } from "framer-motion";
import MySkills from "./comp/MySkills";

const ScreenRight = ({ handleClose }) => {
  return (
    <motion.div
      className="screenRight"
      animate={{ x: -50 }}
      transition={{ ease: "easeOut" }}
    >
      <MySkills />

      <button className="btn-three" onClick={handleClose}>
        close 
      </button>
    </motion.div>
  );
};

export default ScreenRight;
