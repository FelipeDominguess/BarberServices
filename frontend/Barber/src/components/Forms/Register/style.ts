import styled from "styled-components";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
max-width: 300px;
gap: 30px;
`
export const StyledLink = styled(Link)`
text-decoration: none;
`;
export const StyledButton = styled(Button)`
background-color: #0d5bcf;
color: white;

&:hover {
  background-color: #69d113;
}
`;