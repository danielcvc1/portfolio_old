
import BackgroundPop from "./backPop"
import {motion} from "framer-motion"

const Popup=(handleClose)=>{


const text = "sadfsdfasf"



    return(
       

<BackgroundPop className="back" onClick={handleClose}>

<motion.div className="pop" onClick={(e)=>e.stopPropagation}>

<p className="text">{text}</p>


</motion.div>

</BackgroundPop>
    )    

};

export default Popup;