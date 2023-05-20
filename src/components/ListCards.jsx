import styled from 'styled-components';
import Card from './Card';
import Footer from './Footer';

export default function ListCards({ cards }){
   
    return (
        <ContainerCards>
            
            {cards.map((c, index) => (
                <Card
                   key={index}
                   index={index}
                   question={c.question}
                   answer={c.answer}
                   

            
                />
            
            ))}
            
        <Footer />    
        </ContainerCards>
    );
}

const Head = styled.div`
      
`;

const ContainerCards = styled.div`
    display  :flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
