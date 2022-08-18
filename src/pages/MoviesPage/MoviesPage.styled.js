import { Field, Form } from 'formik';
import styled from 'styled-components';


export const StyledForm = styled(Form)`
text-align: center;
margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StyledField = styled(Field)`
width: 300px;
height: 40px;
padding: ${p => p.theme.space[2]}px;
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.radii.normal};
font-size: ${p => p.theme.fontSizes.m};
outline: none;
`;

export const Button = styled.button`
    height: 50px;
    width: 70px;
    cursor: pointer;
    background-color: ${p => p.theme.colors.background};
    border: none;
    border-radius: ${p => p.theme.radii.normal};
    font-size: ${p => p.theme.fontSizes.m};
    padding: ${p => p.theme.space[2]}px;
`;

export const Message = styled.p`
color: red;
text-align: center;
font-size: ${p => p.theme.fontSizes.m};
`;