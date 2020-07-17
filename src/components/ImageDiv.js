import React from 'react'
import { Box } from '../styles/styles'

export default function ImageDiv(props) {
    const { url } = props

    return (
        <Box>
            <img src={url} alt='alt' />
        </Box>
    )
}