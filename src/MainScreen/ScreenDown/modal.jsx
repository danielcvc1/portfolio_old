import { useState } from "react";
import ScreenDown from ".";
import "./modal.css";
import { SlArrowDown } from "react-icons/sl";

const ModalDown = () => {
  const [screen, setScreen] = useState(false);

  const close = () => setScreen(false);
  const open = () => setScreen(true);

  return (
    <div className="down">
      <SlArrowDown
        className="iconDown"
        onClick={() => (screen ? close() : open())}
      />

      {screen && <ScreenDown screen={screen} handleClose={close} />}
    </div>
  );
};

export default ModalDown;
