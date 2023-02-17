import styled from "styled-components";

export const Friend = styled.li`
display: flex;
gap: 10px;
align-items: center;
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