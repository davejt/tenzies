import React from "react"

export default function Die(props) {
    const dotsArray = [
        [false, false, false, false, true, false, false, false, false],
        [true, false, false, false, false, false, false, false, true],
        [true, false, false, false, true, false, false, false, true],
        [true, false, true, false, false, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, true, false, true, true, false, true]
    ]
    const styles = {
        backgroundColor: props.held ? "#59E391" : "white"
    }

    const currentDie = dotsArray[props.value-1]

    const dotsElements = currentDie.map(dot => (
        dot ? <span className='die-dot on' /> : <span className='die-dot off' />
    ))


    return (
        <div className="die-face" onClick={props.hold} style={styles}>
            <div className="dot-container">
                {dotsElements}
            </div>
        </div>
    )
}
