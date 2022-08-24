import styled from "styled-components";

const CardWrapper = styled.div`
    width: 400px; 
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 6px;
    padding: 0 20px;
    background-color: #ffc107;
    box-shadow: 5px 5px 5px #212121;

    .completedClass {
        background-color: red;
    }

    form {
        flex-basis: 80%;

        input {
            border: none;
            border-radius: 4px;
            outline: none;
            width: 100%;
            height: 2rem;
            padding: 0 10px;
            font-size: 1.2rem;
        }
        article,s {
            font-size: 1.6rem;
            color: #eee;
        }
        s {
            color: #616161;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;
        font-size: 1.25rem;
        color: #212121;

        svg {
            cursor: pointer;
            transition: transform ease .2s;

            &:hover {
                transform: scale(1.3);
            }

            &:active {
                transform: scale(.8);
            }
        }
    }

    @media (max-width: 1050px) {
        width: 100%;
    }
`;

export default CardWrapper;