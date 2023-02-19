import "./index.css";
import { motion } from "framer-motion";
import MyProjects from "./MyProjects/MyProjects";
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";

const ScreenDown = ({ handleClose }) => {
  return (
    <motion.div
      className="screenDown"
      animate={{ y: -55 }}
      transition={{ ease: "easeOut" }}
    >

      <div className="leftArwBtn"><GrCaretPrevious/></div>

<div className="project"><MyProjects/></div>

      <div className="rightArwBtn"><GrCaretNext/></div>

      <button className="btn-close-down" onClick={handleClose}>
        close!
      </button>
    </motion.div>
  );
};

export default ScreenDown;
