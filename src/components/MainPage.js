import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgMain from '../assets/images/illustration-sign-up-desktop.svg';
import ImgOK from '../assets/images/icon-list.svg';

const MainPageTS = ({ setSubmit, setEmail, email }) => {
    AOS.init();

    const handleSubscribe = () => {
        switch (email) {
            case '':
                setSubmit(false);
                break;
        default:
                setSubmit(true);
        }
        
    };

    return (
        <Container data-aos="flip-up" fluid className='bg-white cs-br p-lg-3 p-0 pb-5 cs-w'>
            <Row className='mx-lg-3 mx-0'>
                <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}} className='gap-2 d-flex flex-column justify-content-center px-4 mt-3 mt-lg-0'>
                    <h1 className='cs-fw-7 display-4'>Stay updated!</h1>
                    <p className='fs-6'>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ListGroup>
                        <ListGroup.Item className='fs-6 px-0 py-2 border-0'><Image src={ImgOK} alt='ok' className='me-1' /> Product discovery and building what matters</ListGroup.Item>
                        <ListGroup.Item className='fs-6 px-0 py-2 border-0'><Image src={ImgOK} alt='ok' className='me-1' /> Measuring to ensure updates are a success</ListGroup.Item>
                        <ListGroup.Item className='fs-6 px-0 py-2 border-0'><Image src={ImgOK} alt='ok' className='me-1' /> And much more!</ListGroup.Item>
                    </ListGroup>
                    <Form onSubmit={handleSubscribe}>
                        <Form.Group>
                            <Form.Label className='cs-fw-7'>Email address</Form.Label>
                            <Form.Control 
                                type='email' 
                                placeholder='email@company.com' 
                                onChange={(e) => setEmail(e.target.value)}
                                className='py-3'
                                value={email} />
                        </Form.Group>
                        <Button className='mt-3 cs-btn shadow border-0 w-100 py-3' type='submit'>Subscribe to monthly newsletter</Button>
                    </Form>
                </Col>
                <Col xs={12} lg={{span: 1, order: 2}}></Col>
                <Col xs={{span: 12, order: 1}} lg={{span: 5, order: 3}} className='p-0'>
                    <Image fluid src={ImgMain} alt='main img' className='w-100 cs-img' />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPageTS;