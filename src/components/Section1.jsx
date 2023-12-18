import React from "react";
import '../styles/Section1.css';
import { useParallax } from "react-scroll-parallax";
import PathConstants from "../routes/pathConstants";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
    const parallax = useParallax({
        scale: [1, 1.4, "easeOutQuad"]
    });

    let navigate = useNavigate();

    const handleClick = () => {
        navigate(PathConstants.MAP);
    }

    return (<>
        <div id="Section1" className="Section1">
            <div className="image-container">
                <img className="image" src='/assets/map.jpg' ref={parallax.ref} alt="map" />
            </div>
            <div className="title image-text">
                <div className="typewriter">
                    TORead
                </div>
            </div>
            <div className="description image-text">
                <div>
                    aceasta e o descriere care va aparea in mijlocul imaginii
                </div>
            </div>
            <div className="map-button image-text">
                <button onClick={handleClick}>Explore map</button>
            </div>
        </div>
    </>);
}

export default Section1;