import React from 'react';

import Div from './Div';
import Icon from './Icon';

const Avatar = ({ children, iconProp, status, ...rest}) => {
  return <Div
  	{...rest}>
  	{!rest.bgImg && (children ? children : <Icon name="UserSolid" color="white" {...iconProp} />)}
  	{ status && <Icon
  		name="Status"
  		pos="absolute"
  		bottom={rest.rounded === "circle" && '0'}
  		top={rest.rounded === "circle" ? 'auto' : '-4px'}
  		right={rest.rounded === "circle" ? '0' : '-4px'}
  		size="8px"
  		{...status} /> }
  	</Div>
}

Avatar.defaultProps = {
  bg: "brand700",
  pos: "relative",
  textColor: "white",
  d: "flex",
  align: "center",
  justify: "center",
  h: "40px",
  w: "40px",
  rounded: "circle",
  textWeight: "500",
  bgSize: "cover"
}

export default Avatar;
