import { useState } from "react";
import ScreenLeft from ".";
import "./modal.css";
import { SlArrowLeft } from "react-icons/sl";
import BackgroundLeft from "./backgroundLeft";

const ModalLeft = () => {
  const [screen, setScreen] = useState(false);

  const close = () => setScreen(false);
  const open = () => setScreen(true);

  return (
    <div className="left">
      {screen && <BackgroundLeft />}

      {screen && <ScreenLeft screen={screen} handleClose={close} />}

      <SlArrowLeft
        className="iconLeft"
        onClick={() => (screen ? close() : open())}
      />
    </div>
  );
};

export default ModalLeft;


