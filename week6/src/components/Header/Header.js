import React from 'react';
import NavigationMenu from './NavigationMenu';

const Header = () => {
    return (
            <div style={{marginBottom: "25px"}}>
        <div style={{border: "2px solid #f2bea8" , color: "#5573e0", textAlign: "center", backgroundColor: "#fff"} }>
            <h1 style={{textTransform: "uppercase", fontSize: "40px", padding: "15px 5px"}}>Thiết kế layout đơn giản</h1>
            <p style={{fontSize: "20px", padding: "0 0 10px 0"}}>Banner - Header</p>
        </div>
       <NavigationMenu></NavigationMenu>
       </div>
    );
};

export default Header;