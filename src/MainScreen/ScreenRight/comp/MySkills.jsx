import "./MySkill.css"
import { FaHtml5,FaCss3Alt,FaNodeJs,FaJsSquare,FaReact,FaGitAlt,FaGithub,FaSass } from "react-icons/fa";
import { SiExpress,SiMysql,SiSequelize } from "react-icons/si";



const MySkills=()=>{


    return(

        <div className="MySkill">
          <div className="list-1">
            
            <h3 className="h3-programms">Programms:</h3>

              <ul className="ul1">
                <li>JavaScript<FaJsSquare/></li>
                <li>CSS<FaCss3Alt/></li>
                <li>HTML<FaHtml5/></li>
                <li>MYSQL<SiMysql/></li>
                <li>Git<FaGitAlt/></li>
                <li>GitHub<FaGithub/></li>

              
              </ul>

          </div>
          

          <div className="list-2">
          <h3 className="h3-frameLib">Libraries/Frameworks:</h3>

          <ul className="ul2">
                <li>ReactJS<FaReact/></li>
                <li>NodeJS<FaNodeJs/></li>
                <li>Express<SiExpress/></li>
                <li>SASS<FaSass/></li>
                <li>Sequelize<SiSequelize/></li>

              </ul>

          </div>


        </div>
        

    )
}

export default MySkills