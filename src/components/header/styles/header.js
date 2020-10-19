import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')})
    top left / cover no-repeat;

    @media (max-width: 1100px){
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && 'background: none;'}
    }
`


export const Container = styled.div`
    display:flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display:flex;
    }

    @media (max-width: 1000px{
        margin: 0 30px;
    })
`;

export const Logo = styled.img`
    height:75px;
    width: 150px;
    margin-right: 40px;

    @media (min-width: 1449px){
        height: 100px;
        width: 200px;
    }
`

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #2FA8B7;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover{
        transition: 95ms ease-in-out;
        background: #32B2C2;
    }
`;


export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction:column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px){
        display: flex;
    }
`

export const Text = styled.p`
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    color: white;
`



export const FeatureCallout = styled.h2`
    font-size: 50px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    color: white;
    font-weight: bold;
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const TextLink = styled.p`
    color: white;
    font-size: 18px;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '600' : 'normal')}
    text-decoration: none;

    &:hover{
        font-weight: bold;
        cursor: pointer;
    }

    &:last-of-type {
        margin-right: 0;
    }
`


export const Picture = styled.div`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height 32px;
    cursor: pointer;
    
`

export const Dropdown = styled.div`
    display: none;
    background-color: #222;
    position: absolute;
    padding: 10px;
    width: 120px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${TextLink} {
        cursor:pointer;

    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }
        ${TextLink},${Picture}{
            cursor: default;
        }
        
    }

    ${Group}:first-of-type ${TextLink} {
        margin: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }

    
`

export const Search = styled.div`
    display:flex;
    align-items:center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px){
        display:none;
    }
`
export const SearchIcon = styled.button`
    cursor:pointer;
    background-color: transparent;
    border: 0;
    outline: none;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.4);

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0,0,0, 0.36);
    background-color: #e6e6e6;
    color: #000;
    padding: 10px 20px;
    font-weight: bold;
    border-width: 0;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: 125ms ease-in;

    &:hover {
        background-color: #32B2C2;
        color: white;
    }
`

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    outline: none;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
    } 
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer; 
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`
