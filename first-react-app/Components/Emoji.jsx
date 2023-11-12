import React from "react";
import { useState } from "react";

function Emoji() {
    const [mood, setMood] = useState('😀');

    const changeMood = () => {
        if (mood == '😀') {
            setMood('☹️')
        } else if (mood == '☹️') {
            setMood('😀')
        }
    }

    return (
        <>
        <h2>Current Emoji: {mood}</h2>
        <button onClick={changeMood}>Change Emoji</button>
        </>
    )
}

export default Emoji;