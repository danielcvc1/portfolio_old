import "./index.css";
import { motion } from "framer-motion";

const ScreenUp = ({ handleClose }) => {
  return (
    <div>
      <motion.div
        className="screenUp"
        animate={{ y: 50 }}
        transition={{ ease: "easeInOut" }}
      >
        {/* --------------------------------------- */}
        <h2 className="title">ABOUT ME</h2>

        <div className="img-1"></div>

        <h3 className="txt-1">
          Hello and thank you for taking the time and visiting my portfolio.
        </h3>

        <p className="txt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias,
          similique, consequuntur recusandae beatae voluptas corrupti illo
          deleniti necessitatibus fugiat labore praesentium dolores officiis
          ullam repudiandae inventore perferendis itaque expedita!
        </p>
        {/* --------------------------------------- */}

        <button className="btn-close" onClick={handleClose}>
          close!
        </button>
      </motion.div>
    </div>
  );
};

export default ScreenUp;
