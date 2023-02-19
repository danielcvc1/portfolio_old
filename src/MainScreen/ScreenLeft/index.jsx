import "./index.css";
import { motion } from "framer-motion";
import { FaGithubSquare,FaLinkedin} from "react-icons/fa";
import { IconContext } from "react-icons";



const ScreenLeft = ({ handleClose }) => {
  return (
    <motion.div
      className="screenLeft"
      animate={{ x: 50 }}
      transition={{ ease: "easeOut" }}
    >
      <div className="contactMe-linkedIn">
        <a
          href="https://www.linkedin.com/in/daniel-%C4%8Dovi%C4%87-95802322b/"
          target={"_blank"}
          rel={"noreferrer"}
        >
         
<IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
  <div>
  <FaLinkedin/>
  </div>
</IconContext.Provider>
        </a>
      </div>
     
      <div className="contactMe-github">
        <a
          href="https://github.com/danielcvc1"
          target={"_blank"}
          rel={"noreferrer"}
        >

<IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
  <div>
  <FaGithubSquare/>
  </div>
</IconContext.Provider>




        </a>
      </div>

      <form className="form">
        <p className="messageMe">Message me!</p>
        <label htmlFor="name">
          <input
            id="name"
            type="name"
            placeholder="Youre name"
            required
          />
        </label>

        <label htmlFor="email">
    
          <input id="email" type="email" placeholder="email" required />
        </label>

          <textarea name="text" id="text" cols="30" rows="10" placeholder="send a message!"></textarea>

          <button className="submit">submit</button>

      </form>

      <button className="btn-left" onClick={handleClose}>
        close!
      </button>
    </motion.div>
  );
};

export default ScreenLeft;
