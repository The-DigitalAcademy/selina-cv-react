import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import imgCard1 from '../asset/image/html-5--v1.png';
import imgCard2 from '../asset/image/css3.png';
import imgCard3 from '../asset/image/mysql-logo.png';
import imgCard4 from '../asset/image/javascript.png';
import imgCard5 from '../asset/image/react.png';
import imgCard6 from '../asset/image/slack-new.png';
import imgCard7 from '../asset/image/discord-logo.png';
import imgCard8 from '../asset/image/bootstrap.png';

const Skills = () => {
    return (

        <div className="container">


            <h2>Skills</h2>
            <Container className=''>
                <Row>
                    <Col>
                        <Card style={{height: '20rem'}}>
                            <Card.Img variant="top" src={imgCard1} className='imgCard'/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '20rem' }}>
                           <Card.Img variant="top" src={imgCard2} className='imgCard'/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '20rem' }}>
                          <Card.Img variant='top' src={imgCard3} className= 'imgCard'/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '20rem' }}>
                           <Card.Img variant='top' src={imgCard4} className= 'imgCard'/>
                        </Card>
                    </Col>
                </Row>

                <Row style={{marginTop: '1rem'}}>
                    <Col>
                        <Card style={{height: '20rem'}}>
                            <Card.Img variant="top" src={imgCard5} className='imgCard'/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '20rem' }}>
                          <Card.Img variant='top' src={imgCard6} className= 'imgCard'/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '20rem' }}>
                           <Card.Img variant='top' src={imgCard7} className= 'imgCard'/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '20rem'}}>
                            <Card.Img variant="top" src={imgCard8} className='imgCard'/>
                        </Card>
                    </Col>
                </Row>
            </Container>

           
        </div>

    );
}

export default Skills