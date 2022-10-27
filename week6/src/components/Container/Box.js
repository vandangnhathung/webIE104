import React from 'react';

const Box = ({title, author, date, img, children}) => {
    return (
        <div style={{backgroundColor: "#fff", padding: "20px"}}>
            <h2 style={{fontSize: "30px", fontWeight: "bold", marginBottom: "10px"}}>{title}</h2> 
            <div style={{marginBottom: "10px", display: "flex", gap: "5px   "}}>
                <p>{author} - </p>
                <p> {date}</p>
            </div>
            <img src={img} alt="img"/>
            {children}
        </div>
    );
};

export default Box;