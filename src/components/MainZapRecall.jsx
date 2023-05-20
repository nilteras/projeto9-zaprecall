import styled from 'styled-components'
import cards from './../data'
import ListCards from './ListCards';
import logo from './../assets/logo.png'

export default function MainZapRecall() {
    return (
        <Container>

            <Logo>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>

            </Logo>
            
            <ListCards
                cards={cards}
            />
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
  padding: 0px;
  padding-bottom: 200px;
  margin-bottom: 70px;


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
