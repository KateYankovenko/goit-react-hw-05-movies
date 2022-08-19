import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
display: block;
color: ${p => p.theme.colors.secondary};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
&:hover,
&:focus{
    color: ${p => p.theme.colors.black};
}
&:not(:last-child){
    margin-right: ${p => p.theme.space[7]}px;
   
}
`