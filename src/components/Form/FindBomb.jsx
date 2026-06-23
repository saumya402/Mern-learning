import React, { useMemo, useState } from 'react'
import { set } from 'react-hook-form';

export const FindBomb = () => {
    const gridsize = 5;
    const totalTiles = gridsize * gridsize;
    const [clickedTiles, setClickedTiles] = useState([]);
    const bombIndex = useMemo(() => {
        return Math.floor(Math.random() * totalTiles);


    }, [totalTiles])
    const [isGameover, setisGameover] = useState(false)
    const score = clickedTiles.length;

    const clickHandler = (index) => {
        setClickedTiles([...clickedTiles, index])
        console.log(bombIndex)
        if (index == bombIndex) {
            alert("Boooooooommmm")
            setisGameover(true)

        }
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Find Bomb</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridsize},50px)`,
                    gap: "15px",
                    justifyContent: "center",
                }}>
                {Array.from({ length: totalTiles }).map((_, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => clickHandler(index)}
                            style={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid black",
                                backgroundColor: clickedTiles.includes(index) ? "gray" : "white",
                                cursor: "pointer",
                                pointerEvents: isGameover ? "none" : "auto"
                            }}
                        >
                            {
                                isGameover && index === bombIndex ? "💣" : index

                            }



                        </div>

                    )
                })}
            </div>
            <div>
                <div>
                    <h1>Score : {score}</h1>
                </div>
                {
                    isGameover && (
                        <button onClick={() => { setisGameover(false), setClickedTiles([]) }}>Restart</button>
                    )
                }
            </div>

        </div>

    )
}
