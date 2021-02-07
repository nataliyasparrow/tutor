import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


import Curriculum from './Curriculum';
import Scheduler from './Scheduler';
import Reviews from './Reviews';


import photo from './assets/photo_sm.jpg'
// import ln_icon from './assets/ln.png'
// import ig_icon from './assets/ig.png'
// import tw_icon from './assets/tw.png'




import './App.css';

function AppNavigation() {
  return (
    <Container>
      {/* <Row className="justify-content-center">
        <h4 className="App-header">Albert Einstein</h4>
      </Row> */}
      <Col className="App-nav">
      <Navbar className="justify-content-md-center justify-content-start" expand="md">
        {/* <Navbar.Brand className="App-center">Albert Einstein</Navbar.Brand> */}
        <Navbar.Brand className="App-center">ALBERT EINSTEIN</Navbar.Brand>
      </Navbar>
      <Navbar expand="md">
        <Nav className="navbar-collapse collapse justify-content-between align-items-center">
          <Link className="App-link" to="/">About</Link>
          <Link className="App-link" to="/curriculum">Curriculum</Link>
          <Link className="App-link" to="/schedule">Schedule a meeting</Link>
          <Link className="App-link" to="/reviews">Reviews</Link>
        </Nav>
      </Navbar>
      </Col>

    </Container>
  );
}

function SocialIconsRow() {
  return(
    // <Row className="Footer-social">
    //   <a href="https://linkedin.com"><Image 
    //     className="App-social-icon"
    //     src={ln_icon}
    //     alt="LinkedIn Link"
    //   />
    //   </a>
    //   <a href="https://instagram.com"><Image 
    //     className="App-social-icon"
    //     src={ig_icon}
    //     alt="Instagram Link"
    //     />
    //   </a>
    //   <a href="https://twitter.com"><Image 
    //       className="App-social-icon"
    //       src={tw_icon}
    //       alt="Twitter Link"
    //       />
    //   </a>
    // </Row>
    <Row>Social icons</Row>
  )
}

function Footer() {
  return (
    <Row>
      <Col>
        <p className="Footer-txt">Copyright 2021</p>
      </Col>
    </Row>
  );
}

function About() {
  return (
    <Container>
      <Row>
        <Col className="App-image">
          <Image
            roundedCircle
            className="mx-auto d-block"
            src={photo}
            alt="Albert's photo"
          />
          </Col>
          <Col>
            <p>Hi, my name is Albert. I am an experienced math and physics tutor.</p>
            <p className="App-sm-txt">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
            <p className="App-sm-txt">
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <p>Contact me by phone               
              <FontAwesomeIcon className="Icon-margin" icon={faPhoneSquare} /> +1-888-888-888, 
              by email        
              <a className="Icon-link" href="mailto:albert@alberttutor.org"><FontAwesomeIcon className="Icon-margin" icon={faEnvelopeSquare} /></a>,
              or in social media
              <a className="Icon-link" href="https://twitter.com"><FontAwesomeIcon className="Icon-margin" icon={faTwitterSquare}/></a>
              <a className="Icon-link" href="https://facebook.com"><FontAwesomeIcon className="Icon-margin" icon={faFacebookSquare} /></a>
              <a className="Icon-link" href="https://instagram.com"><FontAwesomeIcon className="Icon-margin" icon={faInstagramSquare} /></a>
              <a className="Icon-link" href="https://linkedin.com"><FontAwesomeIcon className="Icon-margin" icon={faLinkedin} /></a>        
            </p>
            </Col>        
          </Row>
    </Container>
  );
}


function App() {
  return (
    <BrowserRouter>
    <Container className="App-main">
        <AppNavigation />
        <Route path="/" exact component={About} />
        <Route path="/curriculum" component={Curriculum} />
        <Route path="/schedule" component={Scheduler} />
        <Route path="/reviews" component={Reviews} />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

export default App;
