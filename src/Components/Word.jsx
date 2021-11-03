import React from "react"
import { useParams } from "react-router";


const Word = () => {
    const { word } = useParams();
    const { bgcolor } = useParams();
    const { color } = useParams();


    if (isNaN(word)) {
        return (
            <>
                <h1 style = {{backgroundColor: bgcolor, color:color }} >The Word is: {word}</h1>
            </>
        )
    }
    else {
        return (
            <>
                <h1 style= {{backgroundColor: bgcolor, color:color }}>This Number is: {word}</h1>
            </>
        )
    }

}

export default Word;