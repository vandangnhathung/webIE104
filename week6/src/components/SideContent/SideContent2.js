import React, { Component } from 'react';
import styled from "styled-components";

const Wrap = styled.div`
    background-color: white;
    width: 300px;
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
const BoxColor = styled.div`
    background-color: #afc3de;
    padding:5px;
`
class SideContent2 extends Component {
    render() {
        return (
            <Wrap className='Content-right'>
                <Heading>Đối tác doanh nghiệp</Heading>
                <BoxColor>
                    <Logo>Logo tuyển sinh</Logo>
                </BoxColor>
                <BoxColor>
                    <Logo>Logo tuyển sinh</Logo>
                </BoxColor>
                <BoxColor>
                    <Logo>Logo tuyển sinh</Logo>
                </BoxColor>             
            </Wrap>
        );
    }
}

export default SideContent2;