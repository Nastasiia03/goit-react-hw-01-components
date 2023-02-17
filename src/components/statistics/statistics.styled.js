import styled from "styled-components";

export const Section = styled.section`
width: 340px;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
height: 100%;
padding-top: 25px;
`

export const Title = styled.h2`
text-align: center;
margin-bottom: 30px;
`
export const List = styled.ul`
display: flex; 
align-items: center;
justify-content: center;

`

export const Item = styled.li`
width: 85px;
height: 70px;
padding-top: 10px;
`
export const Label = styled.p`
margin-bottom: 10px;
font-size: 15px;
text-align: center;
color: white;
text-shadow: 
    2px 2px 2px #000000, 
    0 2px 2px #000000, 
    -2px 0 2px #000000, 
    0 -2px 2px #000000
`
export const Percentage = styled.p`
font-size: 20px;
text-align: center;
color: white;
text-shadow: 
    2px 2px 2px #000000, 
    0 2px 2px #000000, 
    -2px 0 2px #000000, 
    0 -2px 2px #000000
`

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}