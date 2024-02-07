import React from 'react'
import { Link } from 'react-router-dom';
import "../../style/card.css";

const Card = ({ title, logo, languages, liltitle, images }) => {
    return (
        <>
            <div class="card">
                <div className="card-image" style={{ backgroundImage: `url(${images[0]})` }}></div>
                <div class="heading">
                    {title}
                </div>
                <div class="category"> {languages.join(', ')} </div>
                <div class="author"> <Link to={`/${liltitle.toLowerCase()}`}>Get Details</Link></div>
            </div>


            {/* <div className="card">
                <div className="card-background"></div>
                <div className="card-content">
                    <div className="card-image" style={{ backgroundImage: `url(${images[0]})` }}></div>
                    <div className="card-infos">
                        <div className="card-logo" style={{ backgroundImage: `url(${logo})` }}></div>
                        <div className="subinfos">
                            <div className="card-title">{title}
                            </div>
                            <div className="card-subtitle">
                                {languages.join(', ')}

                            </div>
                        </div>
                    </div>
                    <div className="link"> <Link to={`/${liltitle.toLowerCase()}`}>Get Details
                    </Link></div>
                </div>
            </div> */}

        </>
    );
};


export default Card