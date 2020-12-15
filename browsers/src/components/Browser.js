import React from "react";

function Browser({ name, image, opis }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <img src={image} height="100"/>
            <p>{opis}</p>
        </section>
    );
}

export default Browser;