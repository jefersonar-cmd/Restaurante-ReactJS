import styled from "styled-components";


export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #ffffff;
    border-left: 5px solid transparent;
    :hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
        transition: .5s ease all;
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-widht: bold;
    line-height: 29px;
    margin-botton: 20px;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    line-height: 19px;
    margin-botton: 10px;
    margin-top: 5px;
`;

export const RestaurantPhoto = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;

`;