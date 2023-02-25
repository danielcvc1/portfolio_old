import "./index.css";
import ModalDown from "./ScreenDown/modal";
import ModalUp from "./ScreenUp/modal";
import ModalRight from "./ScreenRight/modal";
import ModalLeft from "./ScreenLeft/modal";

const HomePage = () => {
  return (
    <div className="home-page">
     <div>


{/* TERMINAL  */}
      <div className="terminal">
        <div className="centerText">
          <div className="greenText-1">
            user@user-System-Product-Name:~$
          </div>
          <h1 className="one">npm start</h1>
          <br></br>
          <br></br>
          <h1 className="two">portofolio@0.1.0 start</h1>
          <br></br>
          <h1 className="three">react-scripts start</h1>
          <br></br>
          <h1 className="four">starting the development server </h1><h1 className="dots">......</h1>
          <br></br>
          <br></br>
          <br></br>

          <h1 className="five">site fully loaded</h1>


        </div> 
       </div> 
{/* TERMINAL */}
      </div>
      <div className="up">
        <ModalUp />
      </div>
      <div className="down">
        <ModalDown />
      </div>
      <div className="left">
        <ModalLeft />
      </div>
      <div className="right">
        <ModalRight />
      </div>
      <div className="center"></div>
    </div>
  );
};

export default HomePage;
