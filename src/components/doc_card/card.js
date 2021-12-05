import React from 'react'
import './card.css'

function card({title,imageUrl,location,Specialty,sex}) {
    const Click = () => {
        alert("ino avaz kn badan");
      }
    return (
        <div className = 'card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt="card_avatar" />
            </div>
            <div className="card-content">
                <div className='card-title'>
                    <h3>Dr. {title}</h3>
                </div>
                <div className='card-body'>
                    <p>Specialty : {Specialty}</p>
                </div>
                <div className='card-body'>
                    <p>location : {location}</p>
                </div>
                <div className='card-body'>
                sex : {sex}
                </div>
            </div>
            <div className="btn">
                <button onClick={Click}>
                    <a>
                        Go to user profile
                    </a>
                </button>
            </div>
        </div>
    )
}

export default card
