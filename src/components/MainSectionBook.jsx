import React from "react";
import { Outlet } from "react-router-dom";
import '../styles/MainSection.css';

const MainSectionBook = () => {
    return (
        <div className="MainSection">
            <div className="decorations">
                <div className="big circle"></div>
                <div className="small circle"></div>
                <div className="big2 circle"></div>
            </div>
            <div className="button">
                <button>main page</button>
            </div>
            <div className="outlet">
                <Outlet />  
            </div>
            <div className="image">
                <img src="/assets/mee.png" alt="icon"></img>
            </div>
        </div>
    );
}

export default MainSectionBook;