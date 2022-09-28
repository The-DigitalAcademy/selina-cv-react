import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Icon } from '@conify /react';


const About = () => {
  return (

    <Container className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Row>
        <Col>
          <Card style={{ height: '20rem', background: 'rgb(49, 49, 49)', borderColor: 'yellow'}}>
            <div>
              <h1>About Me</h1>

              <p>I,m a deaf software developer
                from Digital Academy.

                i spend my weekend coding and having fun with my close friend
              </p>

            </div>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: '20rem', background: 'rgb(49, 49, 49)', borderColor: 'yellow'}}>
            <h1>Contact Me</h1>
            <div>
              <p><Icon icon="mdi:cellphone" color="white" /> Give us a Call : 073 823 5477 <span></span></p>
            </div>

            <div>
              <p><Icon icon="codicon:mail" color="white" /> Send us an email :selinnkunas@gmail.com <span></span></p>
            </div> 
            
            <div>
              <p><Icon icon="bytesize:location" color="white" /> Come see us :The lorem st.145 <span></span></p>
            </div>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About