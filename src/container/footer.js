import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Colum>
                    <Footer.Title>Sobre-nos</Footer.Title>
                    <Footer.Link href="#"><Icon className="fas fa-history"/>Historia</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-intercom"/>Clientes</Footer.Link>
                        <Footer.Link href="#"><Icon className="fas fa-grin-alt"/>Testemunhos</Footer.Link>
                 </Footer.Colum>
                 <Footer.Colum>
                    <Footer.Title>Servicos</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-chrome"/>Desenvolvimento WEB</Footer.Link>
                        <Footer.Link href="#"><Icon className="fas fa-mobile-alt"/>Desenvolvimento Mobile</Footer.Link>
                        <Footer.Link href="#"><Icon className="fas fa-funnel-dollar"/>Marketing Digital</Footer.Link>
                        <Footer.Link href="#"><Icon className="fas fa-paint-brush"/>Ux Design</Footer.Link>
                 </Footer.Colum>
                 <Footer.Colum>
                    <Footer.Title>Contacte-nos</Footer.Title>
                        <Footer.Link href="#"><Icon className="far fa-envelope"/>Email</Footer.Link>
                        <Footer.Link href="#"><Icon className="fas fa-phone-alt"/>Numero de Celular 1</Footer.Link>
                        <Footer.Link href="#"><Icon className="fas fa-phone-alt"/>Numero de Celular 2</Footer.Link>
                 </Footer.Colum>
                 <Footer.Colum>
                    <Footer.Title>Midias Sociais</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f"/>Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
                 </Footer.Colum>
                 </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}