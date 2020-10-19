import styled from 'styled-components/macro';


export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`;

export const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 22px;
    height 22px;
    opacity: 0.3;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:before,
    &:after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 22px;
        width: 22px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }

`;

export const Button = styled.button`
    background-color: #2FA8B7;
    border-color: #2FA8B7;
    width: 114px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    margin-top: 6px;
    border-radius: 5px;

    &:hover {
        cursor:pointer;
        transition: 95ms ease-in-out;
        background: #32B2C2;
    }
`;