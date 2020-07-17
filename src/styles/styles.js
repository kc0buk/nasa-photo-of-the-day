import React from 'react'
import styled from 'styled-components'



export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
  margin: 30px auto;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'left')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  width: ${(props) => props.width || '100%'};
  text-align: ${props => props.testAlign || 'left'};
  /* border: 1px solid red; */
`

export const HeroDiv = styled.div`
    width: 100%;
    background-image: url('${(props) => (props.url || '')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Box = styled.div`
    width: ${(props) => (props.width || '100%')};
    height: ${(props) => props.height || 'auto'};
    margin: ${props => props.margin || '20px 0'};
    padding: ${props => props.padding || '15px'};
    /* border: 1px solid grey; */
`