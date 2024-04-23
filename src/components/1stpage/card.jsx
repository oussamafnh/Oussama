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
        </>
    );
};


export default Card