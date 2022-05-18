import styled from "styled-components/native";
import { ImageProps } from "./Models";

export const Image = styled.Image<ImageProps>`
    margin-left: ${({ml})=>ml ? ml : 0}px;
    margin-right: ${({mr})=> mr ? mr : 0}px;
    margin-top: ${({mt})=>mt ? mt : 0}px;
    margin-bottom: ${({mt})=>mt ? mt : 0}px;
    background-color: ${({bgColor})=> bgColor ? bgColor : 'transparent'};
    width: ${({width})=>width ? width :40}px;
    height: ${({height})=> height ? height : 40}px;
    border-radius: ${({br})=>br ? br : 0}px;
`