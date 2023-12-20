import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useState } from 'react'
import './App.css'
import Player from "./components/Player";

function App() {

    const players = [
        {
            id: 0,
            name: "Player",
            lifePoints: 8000,
            isPlusClicked: false,
            isMinusClicked: false
        },
        {
            id: 1,
            name: "Player",
            lifePoints: 8000,
            isPlusClicked: false,
            isMinusClicked: false
        },
    ];

    return (
        <>
            <div className="header">
                <h1>IT'S TIME TO D-D-DUEL!</h1>
                <p>Calculate your life points.</p>
            </div>

            {players.map((player) => (
                <Player
                    key={player.id}
                    playerNumber={player.id + 1}
                    lifePoints={player.lifePoints}>
                    <div className="operations">
                        {player.isPlusClicked ? <FaCirclePlus className="icons" /> : <CiCirclePlus className="icons" />}
                        {player.isMinusClicked ? <FaCircleMinus className="icons" /> : <CiCircleMinus className="icons" />}
                        {player.isPlusClicked && <input type="text" />}
                        {player.isMinusClicked && <input type="text" />}
                    </div>
                </Player>
            ))}
        </>
    )
}

export default App
