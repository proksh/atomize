import React, { useState, useRef, useCallback, useContext, createContext, useEffect } from 'react'
import { styled } from 'styletron-react'
import findRoundedDirection from "../../style-functions/findRoundedDirection"
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject"
import Div from '../div/Div'
import { realValue, valueToPercent, fixValue } from './Slider.utils'

const SliderContext = createContext()
export const useSliderContext = () => useContext(SliderContext)

const Slider = React.forwardRef(({
  min,
  max,
  step,
  defaultValue,
  onChange,
  name,
  orientation,
  isDisabled,
  w,
  h,
  p,
  m,
  maxH,
  maxW,
  minH,
  minW,
  children,
  ...rest
}, ref) => {
  if (step && step < 0) { 
    console.warn('\'step\' props can not be negative')
    return null
  }
  if (min > max){
    console.warn('\'min\' props can not be greater than \'max\' prop')
    return null
  }

  const [ currentValue, setValue ] = useState(defaultValue||0)

  const trackPercent = valueToPercent(currentValue, min, max)

  const 
    trackRef = useRef(),
    thumbRef = useRef()
    
  useEffect(() => {
    updateValue(defaultValue)
  }, [defaultValue])


  const updateValue = useCallback(value => {
    if (!isDisabled) setValue(value)
    if(onChange && !isDisabled) {
      onChange(value)
    }
  }, [onChange, isDisabled])


  function getNewValue(event) {
    let diff, percent
    if(orientation === 'vertical') {
      const { bottom, height } = trackRef.current.getBoundingClientRect();
      diff = bottom - event.clientY
      percent = diff / height
    } else {
      const { left, width } = trackRef.current.getBoundingClientRect();
      diff = event.clientX - left
      percent = diff / width
    }
    let value = realValue(percent, min, max)
    if (step) value = fixValue(value, step)
    if (value <= min) value = min
    if (value >= max) value = max
    return value
  }

  // Handles Track
  function handleClickTrack(event) {
    event.preventDefault()
    const newValue = getNewValue(event)
    if(newValue !== currentValue) {
      updateValue(newValue)
    }
  }

  // Handles SliderThumb Events
  function handleMouseMove(event) {
    const newValue = getNewValue(event)
    updateValue(newValue)
  }

  function handleMouseDownThumb(event) {
    event.preventDefault()
    document.body.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseup', handleMouseUpThumb)
  }

  function handleMouseUpThumb(event) {
    event.preventDefault()
    document.body.removeEventListener('mousemove', handleMouseMove)
    document.body.removeEventListener('mouseup', handleMouseUpThumb)
  }

  const context = {
    thumbRef,
    trackRef,
    trackPercent,
    handleMouseDownThumb,
    handleMouseUpThumb,
    handleClickTrack,
    orientation,
  }

  const output = computeSliderStyle({ ...rest, orientation })


  return (
    <SliderContext.Provider value={context}>
      <Div
        d='inline-flex'
        align='center'
        justify='center'
        h={h}
        w={w}
        maxH={maxH}
        maxW={maxW}
        minH={minH}
        minW={minW}
        p={p}
        m={m}
      >
        <PseudoDiv
          ref={ref}
          {...output[0]}
          $styleArray={output[1]}
        >
          {children}
          <input name={name} type='hidden' value={currentValue} />
        </PseudoDiv>
      </Div>
    </SliderContext.Provider>
  )
})

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  defaultValue: 50,
  w: '250px',
  orientation: 'horizontal',
  isDisabled: false,
}

Slider.displayName = "Slider"

export default Slider;

const PseudoDiv = styled(Div, props => {
  return {
    height: props.orientation === 'vertical' ? '100%' : null,
    width: props.orientation === 'vertical' ? null : '100%',
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
  }
})

PseudoDiv.displayName = "SliderPseudoDiv"


const computeSliderStyle = (props) => {
  const {
    p,
    m,
    ...rest
  } = props

  const style = [
    findRoundedDirection(p, 'padding'),
    findRoundedDirection(m, 'margin'),
  ]

  return [rest, arrayKeyMapToObject(style)]
}

export { default as SliderFiller } from './SliderFiller'
export { default as SliderTrack } from './SliderTrack'
export { default as SliderThumb } from './SliderThumb'