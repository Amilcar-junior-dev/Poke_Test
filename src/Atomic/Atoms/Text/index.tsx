import React, { Children } from 'react';
import { TextProps } from './Models';
import { TextRegular } from './style';

export const Text: React.FC<TextProps> = ({
    color,
    fSize,
    children,
    width,
    height,
    fWeight,
    marginLeft,
    marginRigth,
    marginBottom,
    marginTop,
    padding,
    position
}) => {
    return (
        <TextRegular
            color={color}
            fSize={fSize}
            width={width}
            height={height}
            fWeight={fWeight}
            marginLeft={marginLeft}
            marginRigth={marginRigth}
            marginBottom={marginBottom}
            marginTop={marginTop}
            padding={padding}
            position={position}>
            {children}
        </TextRegular>
    )
}