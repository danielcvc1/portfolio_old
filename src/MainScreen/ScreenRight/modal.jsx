import { useState } from "react";
import ScreenRight from ".";
import "./modal.css";
import { SlArrowRight } from "react-icons/sl";

const ModalRight = () => {
  const [screen, setScreen] = useState(false);

  const close = () => setScreen(false);
  const open = () => setScreen(true);

  return (
    <div className="right" script={{}}>

        <SlArrowRight
          className="iconRight"
          onClick={() => (screen ? close() : open())}
        />

        {screen && <ScreenRight screen={screen} handleClose={close} />}
    </div>
  );
};

export default ModalRight;
