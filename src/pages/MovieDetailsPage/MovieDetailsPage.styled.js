import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: flex;
text-decoration: none;
justify-content: center;
align-items: center;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primary};
margin-bottom: ${p => p.theme.space[4]}px;
&:hover,
&:focus{
    color: ${p => p.theme.colors.accent};
}
&:not(:last-child){
    margin-right:  ${p => p.theme.space[4]}px;
}
`;

export const Title = styled.h2`
color: ${p => p.theme.colors.secondary};
text-align: center;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[3]}px;
`