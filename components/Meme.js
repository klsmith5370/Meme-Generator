import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })

    const [memeImages, setMemeImages] = React.useState(memesData)

    function getMemeImage() { // click event handler for getting a random image
        const memesArray = memeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme(prevMeme => ({ ...prevMeme, randomImage: url })) // need to use spread operator to bring in properties from previous state
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"></input>
                <input type="text" placeholder="Bottom text" className="form--input"></input>
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </main>
    )
}