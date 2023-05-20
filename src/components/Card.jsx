import styled, { css } from 'styled-components'
import SetaPlay from './../assets/seta_play.png'
import SetaVirar from './../assets/seta_virar.png'
import { useState } from 'react';

export default function Card({ index, question, answer }) {

    const [ClassCard, setClassCard] = useState(true);
    const [textCard, setTextCard] = useState('Pergunta');
    const [complement, setComplement] = useState(<img src={SetaPlay} onClick={() => showText()} alt="icon" data-test="play-btn" />)

    function showText() {
        setTextCard(question);
        setComplement(<img src={SetaVirar} onClick={() => showAnswer()} alt="icon" data-test="turn-btn" />);


    }

    function showAnswer() {
        setTextCard(answer);
        setComplement(

            <ContainerOptions>
                <Button red>

                    Não lembrei

                </Button>

                <Button yellow>

                    Quase não lembrei

                </Button>

                <Button green>

                    Zap

                </Button>

            </ContainerOptions >

        );



    }


    return (
        <Face textCard={textCard}>
            {textCard}  {textCard === 'Pergunta' ? (index + 1) : ''}
            {complement}
        </Face>

        // <SecondFace>
        //     O que é JSX?
        //     <img src={SetaVirar} alt="seta_virar" />
        // </SecondFace>
        // <LastFace>
        //     JSX é uma sintaxe para escrever HTML dentro do JS
        //     <ContainerOptions>
        //         <Option>Não lembrei</Option>
        //         <Option>Quase não lembrei</Option>
        //         <Option>Zap</Option>
        //     </ContainerOptions>
        // </LastFace>
    );
}

const Face = styled.div`
      width: 300px;
      height: ${(props) => props.textCard === 'Pergunta' ? "65px" : "131px"};
      background-color: ${(props) => props.textCard === 'Pergunta' ? "white" : "#FFFFD5"};
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 18px 15px 10px 15px;
      margin-bottom: 20px;

      display: flex;
      justify-content: space-between;
    

      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: ${(props) => props.textCard === 'Pergunta' ? "16px" : "18px"};
      line-height: 19px;

      color: #333333;
      position: relative;

      img{
        width: ${(props) => props.textCard === 'Pergunta' ? "20px" : "30px"};
        height: ${(props) => props.textCard === 'Pergunta' ? "23px" : "20px"};
        position: ${(props) => props.textCard === 'Pergunta' ? "none" : "absolute"};
        right: 15px;
        bottom: 6px;

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