import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() { // click event handler for getting a random image
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"></input>
                <input type="text" placeholder="Bottom text" className="form--input"></input>
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
                <img src={memeImage} className="meme--image"/>
            </div>
        </main>
    )
}