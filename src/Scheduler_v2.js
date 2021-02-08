import React, { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




export default function Scheduler(){
    const handleSubmit = e => {
        alert('Email has been sent! Thanks!');
        e.preventDefault()
        
    }
return (
<Container>
    <p className="App-sm-txt">You can schedule a trial lesson, a regular lesson, or an information meeting.</p>
    <p className="App-sm-txt">Check my availability below please.</p>
    {/* <Col align="center" vertical-align="middle">
        <Image width="70%" src={calendar}/>
    </Col> */}
    <Col>
        <iframe src="https://calendar.google.com/calendar/embed?src=edhbvjkis41a2a0hb4dgfamd0k%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            width="640" 
            height="480" frameborder="0" 
            scrolling="no">
        </iframe>
    </Col>
    <Col>
    <p className="App-sm-txt">If you are ready to schedule a meeting, please input your data and send to me!</p>
    <p className="App-sm-txt">I'll response you ASAP. Thank you!</p>
    <Form onSubmit={handleSubmit}>
    <Form.Row>
        <Col>
        <Form.Group controlId="formName">
        <Form.Label size="sm">Name</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Enter your name" required/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formEmail">
        <Form.Label size="sm">Email address</Form.Label>
        <Form.Control size="sm" type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        </Col>
    </Form.Row>
    <Form.Row>
        <Col>
        <Form.Group controlId="formDate">
            <Form.Label size="sm">Date</Form.Label>
            <Form.Control size="sm" variant="secondary" type="date" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formTime">
            <Form.Label size="sm">Start time</Form.Label>
            <Form.Control size="sm" variant="secondary" type="time" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formDuration">
            <Form.Label size="sm">Duration (in mins)</Form.Label>
            <Form.Control size="sm" variant="secondary" type="number" />
        </Form.Group>
        </Col>
        </Form.Row>
        <Form.Row>
        <Col>
        <Form.Group controlId="formMsg">
            <Form.Label size="sm">Message</Form.Label>
            <Form.Control size="sm" rows={5} variant="secondary" as="textarea" placeholder="Any additional information you want to share"/>
        </Form.Group>
        </Col>
        </Form.Row>
        <Button variant="secondary" size="sm" type="submit" >
            Send email
        </Button>
    </Form>
    </Col>
</Container>
);
}