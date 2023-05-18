import styled from 'styled-components'
import Header from './components/Header'
import ListQuestions from './components/ListQuestions'
import Footer from './components/Footer'


function App() {

  return (
    <>
      
      <Body>
        <Header />
        <Titulo>TESTE</Titulo>
        <ListQuestions />
        <Footer />
      </Body>
    </>
  )
}

export default App

const Body = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 1250px;

  display: flex;
  flex-direction: column;
  align-items: center;

`;


const Titulo = styled.h1`
  color: WHITE;
`;