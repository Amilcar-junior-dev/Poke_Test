import styled from "styled-components/native";
import { TextProps } from "./Models";

export const TextRegular = styled.Text<TextProps>`
    width:${({width})=> width ? width > 0 ? `${width}px` : width:'auto' };
    height: ${({height})=> height ? height > 0 ? `${height}px` : height:'auto'};
    font-size:${({fSize})=> fSize ? fSize : 10 }px; 
    color: ${({color})=> color ? color : '#010101'};
    font-weight: ${({fWeight})=> fWeight ? fWeight : 'normal'};
`