import React, { useEffect, useState } from 'react'

import './styles/Main.css'
import catImage from './images/catImage.jpg'
import dogImage from './/images/dogImage.jpg'
function Main() {
    const [image,setImage] = useState(catImage)
    const changeImage = () => {
        setImage(image === catImage ?  dogImage : catImage)
    }

    function Show() {
        return (
            <div className='wrapper'>
                    <h1>30 Days of React JS</h1>
            <div className="container">
                <div className="heading">
                    <h2>Animal</h2>
                    <div className="imageBox">
                    <img src={image} alt="" />
                    <button onClick={changeImage}>Change Animal</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    return (<Show></Show>)
    
}

export default Main
