import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import treeImage from './assets/images/tree.png';

function AboutCompany(){
    return(
        <div>
            <Container>
      <Row>
      <Col xs={12} md={6}>  
        <h2>Premier Tree Services in Winter Haven</h2>
        <p>Justin Time tree service is a professional, family owned service that specializes in tree care, tree removal and palm tree services throught  central florida and surrounding areas. We service commercial and residential properties, including 24 hour hurricane relief services. We dedicate and guarentee quality, educated, and professional work done, while also keeping the integrity and life of all your outdoor landscape. We haul off all debris and blow off roofs and entire property leaving your landscape in tidy condition. With our extensive experience, safety measures, and hard work, look no further Justin Time Tree Service is here to service you!</p></Col>
        <Col xs={12} md={6}>
          <Image src={treeImage} style={{ width: '200px', height: '200px' }} />
        </Col>
      </Row>
      </Container>
        </div>
    );
}

export default AboutCompany;