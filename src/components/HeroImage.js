import React from 'react'
import { Container, Box } from '../styles/styles'
import ImageDiv  from './ImageDiv'

export default function HeroImage(props) {
    const { apodData, apodDate, setDate } = props

    return (
        <Container direction='column'>
            <h1>NASA Astronomy Picture of the Day</h1>
            <ImageDiv url={apodData.url}>
            </ImageDiv>
            <Container justify='left' align='start'>
                <Box width='80%'>
                    <Box margin='0'>
                    <h2>{apodData.title}</h2>
                    </Box>
                    <Box margin='0'>
                    <p>{apodData.explanation}</p>
                    </Box>
                    <Box margin='0'>
                    <p className="copyright">
                    {
                        `Copyright: ${apodData.copyright}`
                    }
                        </p>
                        </Box>
                </Box>
                <Container width='15%' direction='column'>
                <Box>
                    <p>Published:</p>
                    <p>{apodDate}</p>
                </Box>
                <Box>
                    <p>Get Another Date</p>
                    <input type='date' onChange={e => setDate(e.target.value)}></input>
                </Box>
                </Container>
            </Container>
      </Container>
    )
}