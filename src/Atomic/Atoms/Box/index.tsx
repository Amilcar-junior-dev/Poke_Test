import styled from 'styled-components/native'

import { ContainerProps, BoxProps, BoxHeaderProps, PropsBoxTouch } from './Models'

export const BoxContainer = styled.View<ContainerProps>`
    flex: 1;
    height: 100%;
    background-color:${({ backgroundColor }) => backgroundColor ? backgroundColor : '#ffffff'};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : '0px'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0px'};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0px'};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : '0px'};
    border-top-left-radius: ${({borderRadiusTopLeft})=> borderRadiusTopLeft ? borderRadiusTopLeft : '0px'};
    border-top-right-radius: ${({borderRadiusTopRight})=> borderRadiusTopRight ? borderRadiusTopRight : '0px'};
    border-bottom-left-radius: ${({borderRadiusBottomLeft})=> borderRadiusBottomLeft ? borderRadiusBottomLeft : '0px'};
    border-bottom-right-radius: ${({borderRadiusBottomRight})=> borderRadiusBottomRight ? borderRadiusBottomRight : '0px'};
`
export const BoxHeader = styled.View<BoxHeaderProps>`
    padding: ${({padding})=> padding ? padding : '0px'};
    flex-direction: ${({ flexDirections }) => flexDirections ? flexDirections : 'column'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
    width:${({ width }) => width ? width : '100%'};
    height:${({ heigth }) => heigth ? heigth : '20px'};
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : '0px'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0px'};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0px'};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : '0px'};
    border-top-left-radius: ${({borderRadiusTopLeft})=> borderRadiusTopLeft ? borderRadiusTopLeft : '0px'};
    border-top-right-radius: ${({borderRadiusTopRight})=> borderRadiusTopRight ? borderRadiusTopRight : '0px'};
    border-bottom-left-radius: ${({borderRadiusBottomLeft})=> borderRadiusBottomLeft ? borderRadiusBottomLeft : '0px'};
    border-bottom-right-radius: ${({borderRadiusBottomRight})=> borderRadiusBottomRight ? borderRadiusBottomRight : '0px'};
`

export const Box = styled.View<BoxProps>`
    width:${({ width }) => width ? width : '100%'};
    height:${({ height }) => height ? height : 'auto'};
    padding:${({ pd }) => pd ? pd : 0}px;
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : '0px'};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0px'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0px'};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : '0px'};
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0px'};
    border-top-left-radius: ${({borderRadiusTopLeft})=> borderRadiusTopLeft ? borderRadiusTopLeft : '0px'};
    border-top-right-radius: ${({borderRadiusTopRight})=> borderRadiusTopRight ? borderRadiusTopRight : '0px'};
    border-bottom-left-radius: ${({borderRadiusBottomLeft})=> borderRadiusBottomLeft ? borderRadiusBottomLeft : '0px'};
    border-bottom-right-radius: ${({borderRadiusBottomRight})=> borderRadiusBottomRight ? borderRadiusBottomRight : '0px'};
    border-color: ${({ borderColor }) => borderColor ? borderColor : null};
    border-width: ${({ borderWidth }) => borderWidth ? borderWidth : '0px'};
    border-right-width:${({borderRightWidth})=>borderRightWidth ? borderRightWidth : '0px'};
    position:${({ position }) => position ? position : 'relative'} ;
    flex-direction: ${({ flexDirections }) => flexDirections ? flexDirections : 'column'};
    flex-wrap: ${({wrap})=> wrap ? wrap : 'nowrap'};
`
export const BoxTouch = styled.TouchableOpacity<PropsBoxTouch>`
    width: ${({ width }) => width ? width : 'auto'};
    height: ${({ height }) => height ? height : 'auto'};
    padding: ${({ pd }) => pd ? pd : 0}px;
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : undefined};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : '0px'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0px'};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0px'};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : '0px'};
    position: ${({ position }) => position ? position : 'relative'};
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'column'};
    border-top-left-radius: ${({borderRadiusTopLeft})=> borderRadiusTopLeft ? borderRadiusTopLeft : '0px'};
    border-top-right-radius: ${({borderRadiusTopRight})=> borderRadiusTopRight ? borderRadiusTopRight : '0px'};
    border-bottom-left-radius: ${({borderRadiusBottomLeft})=> borderRadiusBottomLeft ? borderRadiusBottomLeft : '0px'};
    border-bottom-right-radius: ${({borderRadiusBottomRight})=> borderRadiusBottomRight ? borderRadiusBottomRight : '0px'};
`
