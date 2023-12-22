import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useState } from 'react'
import './App.css'
import Player from "./components/Player";

export const initialPlayers = [
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

function App() {

    const [players, setPlayers] = useState(initialPlayers);
    const [val, setVal] = useState("");

    const handleIsPlusClickedChange = (index) => {

        const updatedPlusClick = players.map((player, i) => {

            if (i !== index) {
                return player;
            }

            return {
                ...player,
                isPlusClicked: !player.isPlusClicked,
                isMinusClicked: false
            };
        });

        setPlayers(updatedPlusClick);

    }

    const handleIsMinusClickedChange = (index) => {

        const updatedMinusClick = players.map((player, i) => {

            if (i !== index) {
                return player;
            }

            return {
                ...player,
                isPlusClicked: false,
                isMinusClicked: !player.isMinusClicked
            };

        });

        setPlayers(updatedMinusClick);
    }

    const updatePlayerName = (playerName, index) => {

        const updatedPlayerName = players.map((player, i) => {

            if (i !== index) {
                return player;
            }

            return {
                ...player,
                name: playerName
            };
        });

        setPlayers(updatedPlayerName);
    }

    const updateLifePoints = (inputLifePoints, index) => {

        if (typeof inputLifePoints !== 'number') {
            inputLifePoints = parseInt(inputLifePoints);
        }

        const updatedLifePoints = players.map((player, i) => {

            if (i !== index) {
                return player;
            }

            if (player.isPlusClicked) {
                return {
                ...player,
                    lifePoints: (player.lifePoints + inputLifePoints) > 99999 ? 99999 : player.lifePoints + inputLifePoints,
                    isPlusClicked: false
                };
            } else {
                return {
                    ...player,
                    lifePoints: (player.lifePoints - inputLifePoints) < 0 ? 0 : player.lifePoints - inputLifePoints,
                    isMinusClicked: false
                };
            }
        });

        setPlayers(updatedLifePoints);
        setVal("");
    }

    return (
        <>
            <div className="header">
                <h1>IT'S TIME TO D-D-DUEL!</h1>
                <p>Calculate your life points.</p>
            </div>

            {players.map((player, index) => (
                <Player
                    key={player.id}
                    playerId={player.id}
                    playerName={player.name}
                    playerNumber={player.id + 1}
                    lifePoints={player.lifePoints}
                    updatePlayerName={updatePlayerName}>
                    <div className="operations">
                        {player.isPlusClicked ? <FaCirclePlus className="operationIcons" onClick={() => { handleIsPlusClickedChange(index) }} /> : <CiCirclePlus className="operationIcons" onClick={() => { handleIsPlusClickedChange(index) }} />}
                        {player.isMinusClicked ? <FaCircleMinus className="operationIcons" onClick={() => { handleIsMinusClickedChange(index) }} /> : <CiCircleMinus className="operationIcons" onClick={() => { handleIsMinusClickedChange(index) }} />}
                        {player.isPlusClicked &&
                            <input
                                type="text"
                                value={val}
                                maxLength={4}
                                autoFocus
                                onChange={e => setVal(e.target.value.replace(/[^0-9]/g, ""))}
                                onKeyDown={e => { (e.key === "Enter" && e.target.value) && updateLifePoints(e.target.value, index) }} />}
                        {player.isMinusClicked &&
                            <input
                                type="text"
                                value={val}
                                maxLength={4}
                                autoFocus
                                onChange={e => setVal(e.target.value.replace(/[^0-9]/g, ""))}
                                onKeyDown={e => { (e.key === "Enter" && e.target.value) && updateLifePoints(e.target.value, index) }} />}
                    </div>
                </Player>
            ))}
        </>
    )
}

export default App
