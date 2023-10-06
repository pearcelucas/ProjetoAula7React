import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Titulo = styled.h1`
color: #211631;

`

export const Navegacao = styled.nav`
    width: 100%;
    background-color: #27273d;
`

export const Lista = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;
   
`

export const ItemLista = styled(Link)`
    text-decoration: none;
    color: white;
`
export const TituloCard = styled.h2`
    color: #211621;
    font-size: 24px;
    margin: 20px 0;
`

export const SubtituloCard = styled.h3`
    color: #877770;
    font-size: 18px;
    font-style: italic;
`

export const ImagemCard = styled.img`
    max-width: 300px;
    border-radius: 50%;
`

export const DescricaoCard = styled.p`
    font-size: 16px;
    line-height: 1.3;
`

export const DuracaoCard = styled.span`
    color: #2078d8;
    font-size: 16px;
`

export const  SobreCard = styled.p`
    font-size: 14px;
    line-height: 1.5;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    background-color: #eee9f3;
    max-width: 960px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
`