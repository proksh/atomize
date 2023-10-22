import * as CSSType from 'csstype'
import { DefaultTheme } from '.'

// @todo: remove values
export type Responsive = Partial<{
	xs: string | Object
	sm: string | Object
	md: string | Object
	lg: string | Object
	xl: string | Object
}>

export type Direction<T> = Partial<{
	t: T | { [key in keyof Responsive]: T }
	b: T | { [key in keyof Responsive]: T }
	r: T | { [key in keyof Responsive]: T }
	l: T | { [key in keyof Responsive]: T }
}>

export type BorderDirection<T> = Direction<T> &
	Partial<{
		tr: T | { [key in keyof Responsive]: T }
		br: T | { [key in keyof Responsive]: T }
		tl: T | { [key in keyof Responsive]: T }
		tb: T | { [key in keyof Responsive]: T }
	}>

export type ContainerProps = Partial<{
	/**
	 * Set display property.
	 *
	 * @example
	 * // Inline-block
	 * d="inline-block"
	 *
	 * // None on Mobile, Flex on Desktop
	 * d={{ xs: "none", md: "flex" }}
	 */
	d:
		| CSSType.Property.Display
		| { [key in keyof Responsive]: CSSType.Property.Display }

	/**
	 * Note: align only works when display is `flex`.
	 *
	 * @example
	 * // center
	 * align="center"
	 *
	 * // space-around on mobile, center on large device
	 * align={{ xs: "space-around", lg: "center" }}
	 */
	align:
		| CSSType.Property.AlignContent
		| { [key in keyof Responsive]: CSSType.Property.AlignContent }

	/**
	 * Note: justify only works when display is `flex`.
	 *
	 * @example
	 * // space-around
	 * justify="space-around"
	 *
	 * // space-around on mobile, center on large device
	 * justify={{ xs: "space-around", lg: "center" }}
	 */
	justify:
		| CSSType.Property.JustifyContent
		| { [key in keyof Responsive]: CSSType.Property.JustifyContent }

	/**
	 * Note: flexDir only works when display is `flex`.
	 *
	 * @example
	 * // Row
	 * flexDir="row"
	 *
	 * // Column in mobile, Row in large device
	 * flexDir={{ xs: 'column', lg: 'row' }}
	 */
	flexDir:
		| CSSType.Property.FlexDirection
		| { [key in keyof Responsive]: CSSType.Property.FlexDirection }

	/**
	 * Note: flexGrow only works when the outer component display is `flex`.
	 *
	 * @example
	 * // Flex Grow
	 * flexGrow="1"
	 *
	 * // Responsive Flex Grow
	 * flexGrow={{ xs: '1', sm: '4', md: '2', lg: '3', xl: '2' }}
	 */
	flexGrow:
		| CSSType.Property.FlexGrow
		| { [key in keyof Responsive]: CSSType.Property.FlexGrow }

	/**
	 * Note: flexWrap only works when display is `flex`.
	 *
	 * @example
	 * // Reverse Wrap
	 * flexWrap="wrap-reverse"
	 *
	 * // Responsive Flex Wrap
	 * flexWrap={{ xs: 'nowrap', md: 'wrap' }}
	 */
	flexWrap:
		| CSSType.Property.FlexWrap
		| { [key in keyof Responsive]: CSSType.Property.FlexWrap }

	/**
	 * Set border radius.
	 *
	 * @example
	 * // Rounded large
	 * rounded="lg"
	 *
	 * // Rounded top left & bottom right
	 * rounded={{ tl: "circle", br: "circle" }}
	 *
	 * // Rounded top
	 * rounded={{ t: "circle" }}
	 *
	 * // Responsive
	 * rounded={{ t: { xs: "circle", md: 'xs'} }}
	 */
	rounded:
		| keyof DefaultTheme['rounded']
		| BorderDirection<keyof DefaultTheme['rounded']>

	/**
	 * Set background color.
	 *
	 * @example
	 * // bg danger
	 * bg="danger700"
	 *
	 * // bg success
	 * bg="success700"
	 */
	bg: keyof DefaultTheme['colors']

	/**
	 * Set background color on hover.
	 *
	 * @example
	 * // hoverBg warning
	 * hoverBg="warning700"
	 *
	 * // hoverBg info
	 * hoverBg="info700"
	 */
	hoverBg: keyof DefaultTheme['colors']

	/**
	 * It is equivalent to `background-image` of css.
	 *
	 * @example
	 * // With background Image
	 * bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
	 */
	bgImg: CSSType.Property.BackgroundImage

	/**
	 * It is equivalent to `background-position` of css.
	 *
	 * @example
	 * // Bottom
	 * bgPos="bottom"
	 *
	 * // in %
	 * bgPos="50%, 10%"
	 */
	bgPos: CSSType.Property.BackgroundPosition

	/**
	 * It is equivalent to `background-size` of css.
	 *
	 * @example
	 * // Contain
	 * bgSize="contain"
	 */
	bgSize: CSSType.Property.BackgroundSize

	/**
	 * It is equivalent to `background-repeat` of css.
	 *
	 * @example
	 * // No repeat
	 * bgRepeat="no-repeat"
	 */
	bgRepeat: CSSType.Property.BackgroundRepeat

	/**
	 * Set height property.
	 *
	 * @example
	 * // Normal Height
	 * h="3rem"
	 *
	 * // Responsive Height
	 * h={{ xs: 'auto', md: '100vh' }}
	 */
	h:
		| CSSType.Property.Height
		| { [key in keyof Responsive]: CSSType.Property.Height }

	/**
	 * Set max height property.
	 *
	 * @example
	 * // Normal
	 * maxH="3rem"
	 *
	 * // Responsive
	 * maxH={{ xs: 'auto', md: '100vh' }}
	 */
	maxH:
		| CSSType.Property.MaxHeight
		| { [key in keyof Responsive]: CSSType.Property.MaxHeight }

	/**
	 * Set min height property.
	 *
	 * @example
	 * // Normal
	 * minH="3rem"
	 *
	 * // Responsive
	 * minH={{ xs: 'auto', md: '100vh' }}
	 */
	minH:
		| CSSType.Property.MinHeight
		| { [key in keyof Responsive]: CSSType.Property.MinHeight }

	/**
	 * Set min height property.
	 *
	 * @example
	 * // Normal
	 * minW="3rem"
	 *
	 * // Responsive
	 * minW={{ xs: 'auto', md: '100vw' }}
	 */
	minW:
		| CSSType.Property.MinWidth
		| { [key in keyof Responsive]: CSSType.Property.MinWidth }

	/**
	 * Set border width & border style properties.
	 *
	 * @example
	 * // 2px solid
	 * border="2px solid"
	 *
	 * // 1px dashed
	 * border="1px dashed"
	 */
	border: CSSType.Property.BorderStyle /* BorderWidth */ | (string & {})

	/**
	 * Set border color property.
	 *
	 * @example
	 * // Danger
	 * borderColor="danger700"
	 *
	 * // Success
	 * borderColor="success700"
	 */
	borderColor: keyof DefaultTheme['colors']

	/**
	 * Set border color property on hover.
	 *
	 * @example
	 * // Danger
	 * hoverBorderColor="danger700"
	 *
	 * // Success
	 * hoverBorderColor="success700"
	 */
	hoverBorderColor: keyof DefaultTheme['colors']

	/**
	 * Set font size & line height properties.
	 *
	 * @example
	 * // Caption
	 * textSize="caption"
	 *
	 * // Responsive
	 * textSize={{ xs: "tiny", md: "body" }}
	 */
	textSize:
		| keyof DefaultTheme['textSize']['size']
		| { [key in keyof Responsive]: keyof DefaultTheme['textSize']['size'] }

	/**
	 * Set font weight property.
	 *
	 * @example
	 * // 300
	 * textWeight="300"
	 *
	 * // Responsive
	 * textWeight={{ xs: '400', md: '500' }}
	 */
	textWeight:
		| CSSType.Property.FontWeight
		| { [key in keyof Responsive]: CSSType.Property.FontWeight }

	/**
	 * Set text decoration property.
	 *
	 * @example
	 * // line-through
	 * textDecor="line-through"
	 *
	 * // underline
	 * textDecor="underline"
	 */
	textDecor: CSSType.Property.TextDecoration

	/**
	 * Set text transform property.
	 *
	 * @example
	 * // line-through
	 * textTransform="uppercase"
	 *
	 * // underline
	 * textTransform="capitalize"
	 */
	textTransform: CSSType.Property.TextTransform

	/**
	 * Set text align property.
	 *
	 * @example
	 * // justify
	 * textAlign="justify"
	 *
	 * // Responsive
	 * textAlign={{ xs: "center", lg: "left" }}
	 */
	textAlign:
		| CSSType.Property.TextAlign
		| { [key in keyof Responsive]: CSSType.Property.TextAlign }

	/**
	 * Set text color.
	 *
	 * @example
	 * // info
	 * textColor="info700"
	 *
	 * // Responsive
	 * textColor={{ xs: 'medium', md: 'black' }}
	 */
	textColor:
		| keyof DefaultTheme['colors']
		| { [key in keyof Responsive]: keyof DefaultTheme['colors'] }

	/**
	 * Set text color on hover.
	 *
	 * @example
	 * // info
	 * hoverTextColor="info700"
	 *
	 * // Responsive
	 * hoverTextColor={{ xs: 'medium', md: 'black' }}
	 */
	hoverTextColor:
		| keyof DefaultTheme['colors']
		| { [key in keyof Responsive]: keyof DefaultTheme['colors'] }

	/**
	 * Set font family.
	 *
	 * @example
	 * // Code
	 * fontFamily="code"
	 *
	 * // Responsive
	 * fontFamily={{ xs: 'primary', lg: 'secondary' }}
	 */
	fontFamily:
		| keyof DefaultTheme['fontFamily']
		| { [key in keyof Responsive]: keyof DefaultTheme['fontFamily'] }

	/**
	 * Set box shadow.
	 *
	 * @example
	 * // Shadow 1
	 * shadow="1"
	 *
	 * // Responsive
	 * shadow={{ xs: '4', md: '3', lg: '1' }}
	 */
	shadow:
		| keyof DefaultTheme['shadows']
		| { [key in keyof Responsive]: keyof DefaultTheme['shadows'] }

	/**
	 * Set box shadow on hover.
	 *
	 * @example
	 * // hoverShadow 1
	 * hoverShadow="1"
	 *
	 * // Responsive
	 * hoverShadow={{ xs: '4', md: '3', lg: '1' }}
	 */
	hoverShadow:
		| keyof DefaultTheme['shadows']
		| { [key in keyof Responsive]: keyof DefaultTheme['shadows'] }

	/**
	 * Set element positioning.
	 *
	 * @example
	 * // Relative
	 * pos="relative"
	 *
	 * // Responsive
	 * pos={{ xs: 'fixed', lg: 'static' }}
	 */
	pos:
		| CSSType.Property.Position
		| { [key in keyof Responsive]: CSSType.Property.Position }

	/**
	 * Set `top` property of a positioned element.
	 *
	 * @example
	 * // Absolute
	 * pos="absolute"
	 * top="0"
	 *
	 * // Fixed
	 * pos="fixed"
	 * top="50%"
	 */
	top: CSSType.Property.Top

	/**
	 * Set `left` property of a positioned element.
	 *
	 * @example
	 * // Absolute
	 * pos="absolute"
	 * left="20%"
	 *
	 * // Fixed
	 * pos="fixed"
	 * left="5rem"
	 */
	left: CSSType.Property.Left

	/**
	 * Set `right` property of a positioned element.
	 *
	 * @example
	 * // Absolute
	 * pos="absolute"
	 * right="0"
	 *
	 * // Fixed
	 * pos="fixed"
	 * right="0"
	 */
	right: CSSType.Property.Right

	/**
	 * Set `bottom` property of a positioned element.
	 *
	 * @example
	 * // Absolute
	 * pos="absolute"
	 * bottom="2rem"
	 *
	 * // Fixed
	 * pos="fixed"
	 * bottom="10%"
	 */
	bottom: CSSType.Property.Bottom

	/**
	 * Set transform property.
	 *
	 * @example
	 * // Scale
	 * transform='scale(1.3, 1)'
	 *
	 * // Responsive Transform
	 * transform={{ xs: 'translateY(50%)', md: 'translateY(0)' }}
	 */
	transform:
		| CSSType.Property.Transform
		| { [key in keyof Responsive]: CSSType.Property.Transform }

	/**
	 * Set element transition value.
	 *
	 * @example
	 * // Default theme transition
	 * transition
	 *
	 * // Custom transition
	 * transition='slow-faster'
	 */
	transition: boolean | keyof DefaultTheme['transition']

	/**
	 * Set element overflow.
	 *
	 * @example
	 * // hidden
	 * overflow="hidden"
	 *
	 * // Directional
	 * overflow="visible scroll"
	 */
	overflow: CSSType.Property.Overflow

	/**
	 * Set `cursor` property.
	 *
	 * @example
	 * // not-allowed
	 * cursor="not-allowed"
	 *
	 * // pointer
	 * cursor="pointer"
	 *
	 * // crosshair
	 * cursor="crosshair"
	 */
	cursor: CSSType.Property.Cursor
}>
