import React from "react";

function About({image, about}) {
    const imageSrc = image ? image : "https://via.placeholder.com/215";

    return(
        <aside>
            <img src={imageSrc} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    ); 
}

export default About;