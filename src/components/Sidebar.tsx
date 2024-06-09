import React from "react";
import '../styles/Sidebar.css';
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaProductHunt } from 'react-icons/fa';


const Sidebar: React.FC = () => {
   const navigate = useNavigate();
   const handleClick = (route: string) => navigate(route);

   const [isExpanded, setIsExpanded] = useReducer((isExpanded)=> !isExpanded, false);

    return (
            <div className={`sidenav ${isExpanded ? 'expanded' : 'collapsed'}`}>
              <button className="toggle-btn" onClick={setIsExpanded}>
               {
                 !isExpanded ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft /> 
                }
              </button>

              <button onClick={() => handleClick('/person')}>
                <FaProductHunt /> {isExpanded && <span> Product </span>}
              </button>
            </div>
            
      );
}

export default Sidebar;