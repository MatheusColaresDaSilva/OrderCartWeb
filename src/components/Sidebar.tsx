import React from "react";
import '../styles/Sidebar.css';
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaProductHunt, FaDrumstickBite } from 'react-icons/fa';


const Sidebar: React.FC = () => {
   const navigate = useNavigate();
   const handleClick = (route: string) => navigate(route);

   const [isExpanded, setIsExpanded] = useReducer((isExpanded)=> !isExpanded, false);

    return (
            <div className={`sidenav ${isExpanded ? 'expanded' : 'collapsed'}`}>

             <div className="top-buttons">
                <button className="top-button" onClick={() => handleClick('/person')}>
                  <FaProductHunt /> {isExpanded && <span> Person </span>}
                </button>
                <button className="top-button" onClick={() => handleClick('/product')}>
                  <FaDrumstickBite  /> {isExpanded && <span> Product </span>}
                </button>
              </div>

              <button className="toggle-btn" onClick={setIsExpanded}>
                {!isExpanded ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
              </button>
            </div>
            
      );
}

export default Sidebar;