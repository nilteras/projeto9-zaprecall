import styled from 'styled-components'

export default function Footer({conclued, arrayConclued}){
    return (
        <BaseFooter>
            {conclued}/8 CONCLUIDOS
            {arrayConclued}
        </BaseFooter>
    );
}

const BaseFooter = styled.div`
      width: 100%;
      height: 70px;
      background: #FFFFFF;
      box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Recursive';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #333333;

      position: fixed;
      bottom: 0;
      left: 0;

`;