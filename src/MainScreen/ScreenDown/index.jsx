import "./index.css"
import { motion } from "framer-motion";


const ScreenDown = ({handleClose}) => {
  return (
    <motion.div className="screenDown" animate={{y:-55}} transition={{ease:"easeOut"}}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero
        quod molestias! Aliquid, est cum architecto voluptatum enim ad suscipit.
      </p>
      <button className="btn-close" onClick={handleClose}>close!</button>
    </motion.div>
  );
};

export default ScreenDown;
