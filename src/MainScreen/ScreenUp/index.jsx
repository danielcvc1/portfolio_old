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



        <h3 className="txt-1">
      <p>    Hello! welcome to my site. </p>
       <p>   My name is Daniel Čović and in this section im gonna say a little bit about my self and how i became a developer and code enthusiast. </p>
        </h3>

        <div className="img-1"></div>

        <p className="txt-2">
        My first step in this field was in mid 2021 when I purchased a course for HTML and CSS by Jonas Schmedtmann. Soon after that when I was comfortable with these two programs I went and bought another course from Mr Schmedtmann this time JavaScript zero to hero, where I learnt a lot about functional programming, ES6 and core JS functionalities. On March 2022 i enrolled in a backend course by JSGuru, about JavaScript and NodeJS, where mentor Peter taught me a lot about JS, Node, databases, relations, tokens and a whole lot more about what happens behind the scenes of a web site.  On that course for my final work I made a backend API for a bus stop application where clients can view bus stops and lines, and an admin side where we can add new stops, make new lines, delete and modify stops and lines.  After that I embarked on a new journey to the frontend to learn and master the visual aspect of web development. My goal is to learn new languages and be a good full-stack developer.
        <p>And that's where I am now, a little bit back a little bit front and a whole lot of desires and will to combine both skills and make a whole out of it!</p> 



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
