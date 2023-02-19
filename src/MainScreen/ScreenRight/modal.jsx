import { useState } from "react";
import ScreenRight from ".";
import "./modal.css";
import { SlArrowRight } from "react-icons/sl";
import BackgroundRight from "./backgroundRight";


const ModalRight = () => {
  const [screen, setScreen] = useState(false);

  const close = () => setScreen(false);
  const open = () => setScreen(true);

  return (
    <div className="right">
        {screen && <BackgroundRight/>}

        {screen && <ScreenRight screen={screen} handleClose={close} />}
        <SlArrowRight
          className="iconRight"
          onClick={() => (screen ? close() : open())}
        />

        
    </div>
  );
};

export default ModalRight;
