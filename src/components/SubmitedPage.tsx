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

type SubmitedPageProps = {
    setSubmit: (submit: boolean) => void;
    email: string;
}

interface Strings {
    img_ok: string,
    head: string,
    par: string,
    button_label: string,
}

const SubmitedPage: React.FC<SubmitedPageProps> = ({ setSubmit, email }) => {
    const strings: Strings = {
        img_ok: ImgOK,
        head: 'Thanks for subscribing!',
        par: `A confirmation email has been sent to <b>${email}</b>. 
            Please open it and click the button inside to confirm your subscription.`,
        button_label: 'Dismiss message',
    }
    
    AOS.init();

    return (
        <Container fluid data-aos="flip-down" className='cs-br bg-white cs-w-2 p-5 d-flex flex-column align-items-start justify-content-center gap-3'>
            <Image fluid src={ImgOK} alt='ok' className='w-25' />
            <h2 className='m-0 h1 cs-fw-7'>{strings.head}</h2>
            <p className='m-0' dangerouslySetInnerHTML={{ __html: strings.par }} />
            <Button onClick={() => setSubmit(false)} className='mt-3 cs-btn shadow border-0 w-100 py-3'>{strings.button_label}</Button>
        </Container>
    );
}

export default SubmitedPage;