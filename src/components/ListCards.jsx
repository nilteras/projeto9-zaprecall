import styled from 'styled-components';
import Card from './Card';
import Footer from './Footer';
import { useState } from 'react';

export default function ListCards({ cards }){

    const [conclued, setConclued] = useState(0);
    const arrayConclued = [];
    
   
    return (
        <ContainerCards>
            
            {cards.map((c, index) => (
                <Card
                   key={index}
                   index={index}
                   question={c.question}
                   answer={c.answer}
                   conclued={conclued}
                   setConclued={setConclued}
                   arrayConclued={arrayConclued}
                />
            
            ))}
            
        <Footer 

            conclued={conclued}
            arrayConclued={arrayConclued}
        />    
        </ContainerCards>
    );
}


const ContainerCards = styled.div`
    display  :flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
