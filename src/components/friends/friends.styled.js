import styled from "styled-components";

export const Friend = styled.li`
display: flex;
gap: 10px;
align-items: center;
width: 230px;
&:not(:last-child) {
    margin-bottom: 15px;
}
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
padding: 10px 10px;
`

export const Status = styled.span`
border-radius: 50%;
width: 15px;
height: 15px;
background-color: ${props => {
    return props.isActive ? "green" : "red";
}
}
`

export const Name = styled.p`
font-size: 17px;
font-weight: 500;
`