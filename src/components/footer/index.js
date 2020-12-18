import React from 'react';
import {Container ,Wrapper, Row, Colum, Link, Title} from './styles/footer';

export default function Footer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.Colum = function FooterColum({children, ...restProps}){
    return <Colum {...restProps}>{children}</Colum>
}

Footer.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
