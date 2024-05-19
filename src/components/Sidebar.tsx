import React from "react";
import '../styles/Sidebar.css';
import { useReducer } from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaProductHunt } from 'react-icons/fa';


const Sidebar: React.FC = () => {
   const [isExpanded, setIsExpanded] = useReducer((isExpanded)=> !isExpanded, false);

    return (
            <div className={`sidenav ${isExpanded ? 'expanded' : 'collapsed'}`}>
              <button className="toggle-btn" onClick={setIsExpanded}>
               {
                 !isExpanded ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft /> 
                }
              </button>

              <a href="#home">
                <FaProductHunt /> {isExpanded && <span> Product </span>}
              </a>
            </div>
            
      );
}

export default Sidebar;