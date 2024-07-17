import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPageTS from './components/MainPage.tsx';
import SubmitedPageTS from './components/SubmitedPage.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsSignUpPage = () => {
    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState('');

    AOS.init();

    return (
        <Container fluid className='p-0 cs-bg cs-h d-flex flex-column justify-content-center'>
            {!submit ? (
                <MainPageTS setSubmit={setSubmit} setEmail={setEmail} email={email} />               
            ) : (
                <SubmitedPageTS setSubmit={setSubmit} email={email} />                 
            )}
        </Container>
    );
};

export default NewsSignUpPage;