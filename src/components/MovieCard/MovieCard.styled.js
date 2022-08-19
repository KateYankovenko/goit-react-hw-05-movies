import styled from 'styled-components';

export const Title = styled.h1`
color: ${p => p.theme.colors.primary};
margin-bottom: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.l};
text-align: center;
`;

export const Img = styled.img`
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
font-size: ${p => p.theme.fontSizes.m};
&:not(:last-child){
margin-bottom: ${p => p.theme.space[3]}px;
}
`;

export const SecondaryTitle = styled.h3`
color: ${p => p.theme.colors.secondary};
margin-bottom: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.m};
`;