import React from 'react';
import { styled } from "styletron-react"
import makeResponsive from "../../style-functions/makeResponsive"
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject"
import { ThemeContext } from "../../core/ThemeContext"
import { useSliderContext } from './Slider'

const SliderFiller = props => {
  const sliderContext = useSliderContext()
  if (sliderContext === undefined) return null

  const {
    trackPercent,
    orientation
  } = sliderContext
  
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeFillerTrackStyle({...props, trackPercent, orientation}, value);
        return (
          <BaseFillerTrack
            {...output[0]}
            $styleArray={output[1]}
          />
        )
      }}
    </ThemeContext.Consumer>
  )
}

SliderFiller.defaultProps = {
  color: 'info800'
}

export default SliderFiller;

const computeFillerTrackStyle = (props, context) => {
  const {
    color,
    trackPercent,
    orientation,
    ...rest
  } = props
  
  const style = [
    makeResponsive(color, 'background-color', context.colors),
    makeResponsive(trackPercent+ "%", orientation === "vertical" ? "height" : "width"),
    makeResponsive('4px', orientation === "vertical" ? "width" : "height"),
    makeResponsive('0', orientation === 'vertical' ? 'bottom' : null),
    makeResponsive("50%", orientation === "vertical" ? "left" : "top"),
    makeResponsive(orientation === 'vertical' ? 'translateX(-50%)' : 'translateY(-50%)', 'transform'),
  ]

  return [rest, arrayKeyMapToObject(style)]
}

const BaseFillerTrack = styled("div", props => {
  return {
    position: 'absolute',
    borderRadius: '0.125rem',
    pointerEvents: 'none',
    ...props.$styleArray
  }
})