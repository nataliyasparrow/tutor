import React, { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';

export default function Curriculum(){
return (
<Container>
    <Table borderless>
        <tbody>
            <tr>
            <td>5th Grade Math:</td>
            <td>
                <p className="App-sm-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
            </td>
            </tr>
            <tr>
            <td>7th Grade Physics:</td>
            <td>
                <p className="App-sm-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
            </td>
            </tr>
            <tr>
            <td>9th Grade Stereometry:</td>
            <td>
                <p className="App-sm-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
            </td>
            </tr>
        </tbody>
    </Table>
</Container>
);
}