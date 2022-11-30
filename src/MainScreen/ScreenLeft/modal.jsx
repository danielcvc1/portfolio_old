import { useState } from "react";
import ScreenLeft from ".";
import "./modal.css";
import { SlArrowLeft } from "react-icons/sl";

const ModalLeft = () => {
  const [screen, setScreen] = useState(false);

  const close = () => setScreen(false);
  const open = () => setScreen(true);

  return (
    <div className="left">
      <SlArrowLeft
        className="iconLeft"
        onClick={() => (screen ? close() : open())}
      />
      {screen && <ScreenLeft screen={screen} handleClose={close} />}
    </div>
  );
};

export default ModalLeft;
