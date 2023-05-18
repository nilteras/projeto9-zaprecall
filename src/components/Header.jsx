import styled from 'styled-components'

export default function Header(){
    return (
        <Topo>Cabeçalho</Topo>
    );
}

const Topo = styled.div`
        width: 260px;
        height: 60px;
        background-color: blue;
`;