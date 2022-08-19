import styled from 'styled-components';

export const ReviewsList = styled.ul`
list-style: none;
padding-left: ${p => p.theme.space[5]}px;
padding-right: ${p => p.theme.space[5]}px;
`;

export const ReviewsItem = styled.li`
font-size: ${p => p.theme.fontSizes.m};
&:not(:last-child){
    margin-bottom: ${p => p.theme.space[4]}px;
}
`;

export const AuthorName = styled.p`
color: ${p => p.theme.colors.secondary};
font-weight:  ${p => p.theme.fontWeights.bold};
 margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Message = styled.p`
text-align: center;
color: red;
`;