import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    botton: 0;

    display: flex;
    justify-content: center;
    align-itens: center;
    width: 100%;
    height: 100%;

    background-color: rgba(78, 89, 131, 0.5)
    backdrop-filter: blur(5px);

    z-index: 999;
`;

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-contente: center;
    max-height: calc(100% - 144px)
    width: 500px;
    padding: 24px;
    background-color: #fffffff;
    box-shadow: 0px 0px 32px rgba(78,89,131,0.2);
    border-radius: 8px;
`;