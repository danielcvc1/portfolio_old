import "./index.css";
import { motion } from "framer-motion";
import About from "./indexItems/About";

const ScreenUp = ({ handleClose }) => {
  return (
    <div>
      <motion.div
        className="screenUp"
        animate={{ y: 50 }}
        transition={{ ease: "easeInOut" }}
      >
        <About />
        <button className="btn-close" onClick={handleClose}>
          close!
        </button>
      </motion.div>
    </div>
  );
};

export default ScreenUp;
