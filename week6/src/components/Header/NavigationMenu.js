import React from 'react';

const nav = [{
    name: "giới thiệu"
},{
    name: "đào tạo đại học"
},
{
    name: "Đào tạo sau đại học"
},
{
    name: "nghiên cứu khoa học"
},
{
    name: "tuyển dụng"
},
]

const NavigationMenu = () => {
    return (
        <div style={{justifyContent: "space-between",display: "flex", textTransform: "uppercase", backgroundColor: "#019fd7", padding: "10px",color: "#fff"}}>
        <ul style={{display: "flex", listStyle: "none", gap: "20px"}}>
        {nav.map((item, idx) => (
            <li key={idx}>{item.name}</li>
        ))}
        </ul>
        <p>Đăng ký</p>

        </div>
    );
};

export default NavigationMenu;