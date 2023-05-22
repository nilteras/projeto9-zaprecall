import styled, { css } from 'styled-components'
import SetaPlay from './../assets/seta_play.png'
import SetaVirar from './../assets/seta_virar.png'
import erro from './../assets/icone_erro.png'
import quase from './../assets/icone_quase.png'
import certo from './../assets/icone_certo.png'
import { useState } from 'react';

export default function Card({ index, question, answer, conclued, setConclued, arrayConclued }) {

    const [textCard, setTextCard] = useState('Pergunta');
    const [classCard, setClassCard] = useState(false);
    const [complement, setComplement] = useState(<img src={SetaPlay} onClick={() => showText()} alt="icon" data-test="play-btn" />)
    const [colorText, setColorText] = useState('#333333');
    
    function showText() {
        setTextCard(question);
        setComplement(<img src={SetaVirar} onClick={() => showAnswer()} alt="icon" data-test="turn-btn" />);

    }

    function showAnswer() {
        setTextCard(answer);
        setComplement(

            <ContainerOptions>
                <Button red onClick={() => checkAnswer("red")} data-test="no-btn">

                    Não lembrei

                </Button>

                <Button yellow onClick={() => checkAnswer("yellow")} data-test="partial-btn">

                    Quase não lembrei

                </Button>

                <Button green onClick={() => checkAnswer("green")} data-test="zap-btn">

                    Zap

                </Button>

            </ContainerOptions >

        );

    }

    function checkAnswer(choice) {
        
        console.log(arrayConclued)
        if (choice === "red") {
            setTextCard("Pergunta")
            setComplement(<img src={erro} alt="icon" data-test="no-icon"/>);
            arrayConclued.push(choice)
            setConclued((arrayConclued.length));
            setClassCard(true);
            setColorText('#FF3030')
            


        }
        if (choice === "yellow") {

            setTextCard("Pergunta")
            setComplement(<img src={quase} alt="icon" data-test="partial-icon" />);
            arrayConclued.push(choice)
            setConclued((arrayConclued.length));
            setClassCard(true);
            setColorText('#FF922E')
        }
        if (choice === "green") {
            setTextCard("Pergunta")
            setComplement(<img src={certo} alt="icon" data-test="zap-icon"/>);
            arrayConclued.push(choice)
            setConclued((arrayConclued.length));
            setClassCard(true);
            setColorText('#2FBE34')
            
        }
    }


    return (
        <Face data-test="flashcard" textCard={textCard} classCard={classCard} colorText={colorText} >
            <p data-test="flashcard-text"> {textCard}  {textCard === 'Pergunta' ? (index + 1) : ''}</p>
            {complement}
        </Face>

    );
}

const Face = styled.div`
      width: 300px;
      height: ${(props) => props.textCard === 'Pergunta' ? "65px" : "131px"};
      background-color: ${(props) => props.textCard === 'Pergunta' ? "white" : "#FFFFD5"};
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: ${(props) => props.textCard === 'Pergunta' ? "23px 15px 23px 15px" : "10px 15px 10px 15px" }; 
      margin-bottom: 20px;

      display: flex;
      justify-content: space-between;
    
      text-decoration-line: ${(props) => props.textCard === 'Pergunta' && props.classCard === true ? "line-through" : "none"};
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: ${(props) => props.textCard === 'Pergunta' ? "16px" : "18px"};
      line-height: 19px;

      color: ${(props) => props.colorText};
      position: relative;

      img{
        width: ${(props) => props.textCard === 'Pergunta' ? "20px" : "30px"};
        height: ${(props) => props.textCard === 'Pergunta' ? "23px" : "20px"};
        position: ${(props) => props.textCard === 'Pergunta' ? "none" : "absolute"};
        right: 15px;
        bottom: 6px;
        cursor: pointer;
      }      
`;



const Button = styled.button`
    width: 85px;
    height: 37px;

   
    border-radius: 5px; 
    margin-right: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    cursor: pointer;

    ${props =>
        props.red && css`
   background-color:#FF3030;
  `};

  ${props =>
        props.yellow && css`
   background-color:#FF922E;
  `};
  ${props =>
        props.green && css`
   background-color:#2FBE34;
  `};

`;


const ContainerOptions = styled.div`
    display  :flex ;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 10px;
`;