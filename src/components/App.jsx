import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Buttons from './Buttons'
import { SOME_CONFIG } from '../config'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Title = styled.h1`
	text-align: center;
`

export default () => (
    <Wrapper>
        <Logo />
        <Title>Hello React-boilerplate!</Title>
        <Buttons />
        {SOME_CONFIG}
    </Wrapper>
)