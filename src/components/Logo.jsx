import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector } from 'react-redux'
import logo from '../logo.svg'

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const Logo = styled.img`
	width: 10em;
    animation: ${rotate} infinite ${({ speed }) => 10/speed}s linear;
`

export default () => {
    const speed = useSelector(store => store.logoSpinSpeed.speed)

    return (
        <Logo src={logo} speed={speed} alt='react logo' />
    )
}