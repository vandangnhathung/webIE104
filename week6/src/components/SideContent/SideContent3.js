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

const Text = styled.p`
    padding-left:15px;
    margin:0;
    text-align: left;
`
const BoxColor = styled.div`
    background-color: #afc3de;
    padding:5px;
`
class SideContent3 extends Component {
    render() {
        return (
            <Wrap className='Content-right'>
                <Heading>Mạng xã hội</Heading>
                <Text>
                    Zalo 
                </Text>
                <Text>
                   Facebook
                </Text>
                <Text>
                   Youtube
                </Text>
            </Wrap>
        );
    }
}

export default SideContent3;