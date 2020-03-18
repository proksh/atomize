import React from 'react';
import { styled } from "styletron-react"
import makeResponsive from "../../style-functions/makeResponsive"
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject"
import { ThemeContext } from "../../core/ThemeContext"
import { useSliderContext } from './Slider'

const SliderThumb = props => {
  const sliderContext = useSliderContext()
  if (sliderContext === undefined) return null

  const {
    thumbRef,
    handleMouseDownThumb,
    handleMouseUpThumb,
    orientation,
    trackPercent,
  } = sliderContext
  

  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeThumbStyle({ ...props, trackPercent, orientation }, value);
        return (
          <BaseThumb
            onMouseDown={handleMouseDownThumb}
            onTouchStart={handleMouseDownThumb}
            onTouchEnd={handleMouseUpThumb}
            ref={thumbRef}
            {...output[0]}
            $styleArray={output[1]}
          />
        )
      }}
    </ThemeContext.Consumer>
  )
}

SliderThumb.defaultProps = {
  color: 'gray200'
}

export default SliderThumb

const computeThumbStyle = (props, context) => {
  const {
    color,
    trackPercent,
    orientation,
    ...rest
  } = props

  const style = [
    makeResponsive(color, 'background-color', context.colors),
    makeResponsive(`calc(${trackPercent}% - 7px)`, orientation === 'vertical' ? 'bottom' : 'left'),
    makeResponsive('50%', orientation === 'vertical' ? 'left' : 'top'),
    makeResponsive(orientation === 'vertical' ? 'translateX(-50%)' : 'translateY(-50%)', 'transform'),
  ]

  return [rest, arrayKeyMapToObject(style)]
}

const BaseThumb = styled("div", props => {
  return {
    position: 'absolute',
    width: '14px',
    height: '14px',
    borderRadius: '9999px',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)',
    border: '1px solid transparent',
    ...props.$styleArray
  }
})