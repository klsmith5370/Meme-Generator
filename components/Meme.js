import React from "react"
import memesData from "../memesData"

export default function Meme() {
    function getMemeImage() { // click event handler for getting a random image
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        // console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"></input>
                <input type="text" placeholder="Bottom text" className="form--input"></input>
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
        </main>
    )
}