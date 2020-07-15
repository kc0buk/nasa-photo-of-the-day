import React from 'react'

export default function HeroImage(props) {
    const { apodData, apodDate } = props

    return (
        <div className="container">
            <h1>NASA Astronomy Picture of the Day</h1>
            <div className="heroImage">
            <img src={apodData.url} />
            </div>
            <div className="detailsContainer">
                <div className="description">
                    <h2>{apodData.title}</h2>
                    <p>{apodData.explanation}</p>
                    <p className="copyright">
                    {
                        `Copyright: ${apodData.copyright}`
                    }
                        </p>
                </div>
                <div className="apodDate">
                    <p>{`Published: ${apodDate}`}</p>
                </div>
            </div>
      </div>
    )
}