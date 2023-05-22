import styled from 'styled-components'
import cards from './../data'
import ListCards from './ListCards';
import logo from './../assets/logo.png'
import { useState } from 'react';





export default function MainZapRecall() {

    const [playZap, setplayZap] = useState(false);


    function StartZap() {

        setplayZap(true);
    }

    return (
        <Container>
            <FisrtPage playZap={playZap}>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
                <ButtonStart data-test="start-btn" onClick={() => StartZap()}>
                    Iniciar Recall!
                </ButtonStart>
            </FisrtPage>



            <PageQuestions playZap={playZap} >
                <Logo>
                    <img src={logo} alt="logo" />
                    <h1>ZapRecall</h1>

                </Logo>

                <ListCards
                    cards={cards}
                />
            </PageQuestions>
        </Container>
    );
}

const Container = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
 
  margin-bottom: 200px;


`;

const PageQuestions = styled.div`
    display: ${(props) => props.playZap === true ? "flex" : "none"}; 
    flex-direction: column;
    align-items: center;
`;

const FisrtPage = styled.div`
    display: ${(props) => props.playZap === true ? "none" : "flex"}; 
    flex-direction: column;
    
    align-items: center;
    padding-top: 200px;

    img {
        width: 136px;
        height: 161px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px; 
        color: white;
        margin-top: 18px;
    }
`;

const ButtonStart = styled.button`
        width: 246px;
        height: 54px;
        margin-top: 30px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;

        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
     
        text-align: center;

        color: #D70900;
        cursor: pointer;


`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

img {
    width: 52px;
    height: 60px; 
}
h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    padding-left: 20px;

}
`;
