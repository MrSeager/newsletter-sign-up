import React from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Button } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgOK from '../assets/images/icon-success.svg';

const SubmitedPage = ({ setSubmit, email }) => {
    AOS.init();

    return (
        <Container fluid data-aos="flip-down" className='cs-br bg-white cs-w-2 p-5 d-flex flex-column align-items-start justify-content-center gap-3'>
            <Image fluid src={ImgOK} alt='ok' className='w-25' />
            <h2 className='m-0 h1 cs-fw-7'>Thanks for subscribing!</h2>
            <p className='m-0'>A confirmation email has been sent to <b>{email}</b>. 
            Please open it and click the button inside to confirm your subscription.</p>
            <Button onClick={() => setSubmit(false)} className='mt-3 cs-btn shadow border-0 w-100 py-3'>Dismiss message</Button>
        </Container>
    );
}

export default SubmitedPage;