import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Movies = styled.ul`
list-style: none;
`;

export const Movie = styled.li`
&:not(:last-child){
    margin-bottom: ${p => p.theme.space[3]}px;
}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
font-size: ${p => p.theme.fontSizes.m};
color:${p => p.theme.colors.primary};
font-weight: ${p => p.theme.fontWeights.bold};
&:hover,
&:focus{
    color:${p => p.theme.colors.accent};
}
`