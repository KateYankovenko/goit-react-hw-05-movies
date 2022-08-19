import styled from 'styled-components';

export const CastList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
row-gap: ${p => p.theme.space[4]}px;
column-gap: ${p => p.theme.space[4]}px;
`;

export const CastItem = styled.li`
display: flex;
flex-direction: column;
flex-basis: calc((100% - 6px) / 8);
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.radii.normal};
padding: ${p => p.theme.space[2]}px;
`;

export const Img = styled.img`
display: block;
width: 100%;
height: 214px;
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.bold};
`;

export const TextCharacter = styled.p`
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.accent};
`;