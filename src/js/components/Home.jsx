import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// CSS para el semáforo
const trafficLightStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    width: '100px',
    margin: '50px auto',
};

const lightStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    margin: '10px',
    border: '2px solid #555',
    cursor: 'pointer',
    opacity: '0.3',
};

// Componente del Semáforo
const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div style={trafficLightStyles}>
            {/* Luz Roja */}
            <div
                style={{
                    ...lightStyles,
                    backgroundColor: 'red',
                    ...(color === 'red' ? { opacity: '1' } : {}),
                }}
                onClick={() => setColor('red')}
            ></div>
            {/* Luz Amarilla */}
            <div
                style={{
                    ...lightStyles,
                    backgroundColor: 'yellow',
                    ...(color === 'yellow' ? { opacity: '1' } : {}),
                }}
                onClick={() => setColor('yellow')}
            ></div>
            {/* Luz Verde */}
            <div
                style={{
                    ...lightStyles,
                    backgroundColor: 'lightgreen',
                    ...(color === 'lightgreen' ? { opacity: '1' } : {}),
                }}
                onClick={() => setColor('lightgreen')}
            ></div>
        </div>
    );
};


//create your first component
const Home = () => {
    return (
        <div className="text-center">
            {/* Estos son los comentarios y elementos que ya estaban */}
            <h1 className="text-center mt-5">Hello Rigo!</h1>
            <p>
                <img src={rigoImage} />
            </p>
            <a href="#" className="btn btn-success">
                If you see this green button... bootstrap is working...
            </a>
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
                love!
            </p>

            <TrafficLight />
        </div>
    );
};

export default Home;