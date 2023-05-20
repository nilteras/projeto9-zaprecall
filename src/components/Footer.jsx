import styled from 'styled-components'

export default function Footer(){
    return (
        <BaseFooter>
            0/4 CONCLUIDOS
        </BaseFooter>
    );
}

const BaseFooter = styled.div`
      width: 375px;
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

`;