
export interface ContainerProps {
    flex?: number
    width?: string | number
    heigth?: string | number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start'
    flexDirections?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    backgroundColor?: string
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number
    borderRadiusTopLeft?: string | number 
    borderRadiusTopRight?: string | number
    borderRadiusBottomLeft?: string | number
    borderRadiusBottomRight?: string | number
}

export interface BoxHeaderProps {
    width?: string | number
    heigth?: string | number
    padding?: string | number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    flexDirections?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    backgroundColor?: string
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number
    borderRadiusTopLeft?: string | number 
    borderRadiusTopRight?: string | number
    borderRadiusBottomLeft?: string | number
    borderRadiusBottomRight?: string | number

    
}

export interface BoxProps {
    width?: string | number
    height?: string | number 
    pd?: number 
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    backgroundColor?: string;
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number 
    borderRadius?: string | number
    borderRadiusTopLeft?: string | number 
    borderRadiusTopRight?: string | number
    borderRadiusBottomLeft?: string | number
    borderRadiusBottomRight?: string | number
    borderColor?: string 
    borderWidth?: string
    borderRightWidth?: string | number
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    flexDirections?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    FlatList?: any
    wrap?: string
}

export interface PropsBoxTouch{
    width?: string | number
    height?: string | number
    pd?: number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    backgroundColor?: string;
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number 
    borderRadius?: string | number
    borderRadiusTopLeft?: string | number 
    borderRadiusTopRight?: string | number
    borderRadiusBottomLeft?: string | number
    borderRadiusBottomRight?: string | number
    borderColor?: string 
    borderWidth?: string
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    flexDirection?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    onPress: ()=> any
}

