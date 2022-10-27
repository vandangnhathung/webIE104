import React, { Component } from 'react';
import styled from "styled-components";

const Wrap = styled.div`
    background-color: white;
    width: 100%;
    padding:15px;
    margin-bottom:10px;
`
const Heading = styled.h1`
    font-size: 16px;
    text-align: left;
    text-transform: uppercase;
`
const Logo = styled.p`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    padding: 15px;
    margin: 15px;
`
const Text = styled.p`
    padding-left:15px;
    margin:0;
    text-align: left;
`
const BoxColor = styled.div`
    background-color: #afc3de;
    padding:5px;
`
class SideContent1 extends Component {
    render() {
        return (
            <Wrap className='Content-right'>
                <Heading>Tuyển sinh</Heading>
                <BoxColor>
                    <Logo>Logo tuyển sinh</Logo>
                </BoxColor>
                <Text>
                    Công nghệ Thông tin 
                </Text>
                <Text>
                   Khoa học Dữ liệu
                </Text>
            </Wrap>
        );
    }
}

export default SideContent1;