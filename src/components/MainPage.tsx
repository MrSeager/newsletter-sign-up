import React from 'react';
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

type MainPageProps = {
    setSubmit: (submit: boolean) => void;
    setEmail: (email: string) => void;
    email: string;
};

interface Strings {
    head: string;
    par: string;
    list_item_1: string;
    list_item_2: string;
    list_item_3: string;
    form_label: string;
    button_label: string;
    img_ok: string;
    img_main: string;
}

const MainPage: React.FC<MainPageProps> = ({ setSubmit, setEmail, email }) => {
    AOS.init();

    const strings: Strings = {
        head: 'Stay updated!',
        par: 'Join 60,000+ product managers receiving monthly updates on:',
        list_item_1: 'Product discovery and building what matters',
        list_item_2: 'Measuring to ensure updates are a success',
        list_item_3: 'And much more!',
        form_label: 'Email address',
        button_label: 'Subscribe to monthly newsletter',
        img_ok: ImgOK,
        img_main: ImgMain,
    };

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
                    <h1 className='cs-fw-7 display-4'>{strings.head}</h1>
                    <p className='fs-6'>{strings.par}</p>
                    <ListGroup>
                        <ListGroup.Item className='fs-6 px-0 py-2 border-0'><Image src={strings.img_ok} alt='ok' className='me-2' />{strings.list_item_1}</ListGroup.Item>
                        <ListGroup.Item className='fs-6 px-0 py-2 border-0'><Image src={strings.img_ok} alt='ok' className='me-2' />{strings.list_item_2}</ListGroup.Item>
                        <ListGroup.Item className='fs-6 px-0 py-2 border-0'><Image src={strings.img_ok} alt='ok' className='me-2' />{strings.list_item_3}</ListGroup.Item>
                    </ListGroup>
                    <Form onSubmit={handleSubscribe}>
                        <Form.Group>
                            <Form.Label className='cs-fw-7'>{strings.form_label}</Form.Label>
                            <Form.Control 
                                type='email' 
                                placeholder='email@company.com' 
                                onChange={(e) => setEmail(e.target.value)}
                                className='py-3'
                                value={email} />
                        </Form.Group>
                        <Button className='mt-3 cs-btn shadow border-0 w-100 py-3' type='submit'>{strings.button_label}</Button>
                    </Form>
                </Col>
                <Col xs={12} lg={{span: 1, order: 2}}></Col>
                <Col xs={{span: 12, order: 1}} lg={{span: 5, order: 3}} className='p-0'>
                    <Image fluid src={strings.img_main} alt='main img' className='w-100 cs-img' />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;