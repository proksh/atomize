import React from 'react'
import { styled } from "styletron-react"
import makeResponsive from "../../style-functions/makeResponsive"
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject"
import { ThemeContext } from "../../core/ThemeContext"
import { useSliderContext } from './Slider'

const SliderTrack = (props) => {
  const sliderContext = useSliderContext()
  if (sliderContext === undefined) return null
  
  const {
    handleClickTrack,
    trackRef,
    orientation
  } = sliderContext

  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeTrackStyle({ ...props, orientation }, value)
        return (
          <BaseTrack
            onClick={(e) => handleClickTrack(e)}
            ref={trackRef}
            {...output[0]}
            $styleArray={output[1]}
          />
        )
      }}
    </ThemeContext.Consumer>
  )
}

SliderTrack.defaultProps = {
  color: 'gray300'
}

export default SliderTrack;

const computeTrackStyle = (props, context) => {
  const {
    color,
    orientation,
    ...rest
  } = props
  
  const style = [
    makeResponsive(color, 'background-color', context.colors),
    makeResponsive('4px', orientation === "vertical" ? "width" : "height"),
    makeResponsive('100%', orientation === "vertical" ? "height" : "width"),
    makeResponsive('50%', orientation === 'vertical' ? 'left' : 'top'),
    makeResponsive(orientation === 'vertical' ? 'translateX(-50%)' : 'translateY(-50%)', 'transform'),
  ]

  return [rest, arrayKeyMapToObject(style)]
}

const BaseTrack = styled("div", props => {
  return {
    position: 'absolute',
    borderRadius: '0.125rem',
    ...props.$styleArray
  }
})