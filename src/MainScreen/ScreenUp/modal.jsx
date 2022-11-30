import { useState } from "react";
import ScreenUp from ".";
import "./modal.css";
import { SlArrowUp } from "react-icons/sl";
import Background from "./background";

const ModalUp = () => {
  const [screen, setScreen] = useState(false);

  const close = () => setScreen(false);
  const open = () => setScreen(true);

  return (
    <div className="up">
      <SlArrowUp
        style={{ position: "absolute" }}
        className="iconUp"
        onClick={() => (screen ? close() : open())}
      />

      {screen && <ScreenUp screen={screen} handleClose={close} />}
      {screen && <Background/>}

    </div>
  );
};



export default ModalUp;
