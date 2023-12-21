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

    const handleIsPlusClickedChange = (index) => {

        const updatedPlusClick = players.map((player, i) => {
            if (i == index) {
                return {
                    ...player,
                    isPlusClicked: !player.isPlusClicked,
                    isMinusClicked: false
                };
            } else {
                return player;
            }
        });

        setPlayers(updatedPlusClick);

    }

    const handleIsMinusClickedChange = (index) => {

        const updatedMinusClick = players.map((player, i) => {
            if (i == index) {
                return {
                    ...player,
                    isPlusClicked: false,
                    isMinusClicked: !player.isMinusClicked
                };
            } else {
                return player;
            }
        });

        setPlayers(updatedMinusClick);
    }

    const updatePlayerName = (playerName, index) => {

        const updatedPlayerName = players.map((player, i) => {
            if (i == index) {
                return {
                    ...player,
                    name: playerName
                };
            } else {
                return player;
            }
        });

        setPlayers(updatedPlayerName);
    }

    const updateLifePoints = (lifePoints, index) => {

        const updatedLifePoints = players.map((player, i) => {
            if (i == index) {
                return {
                    ...player,
                    lifePoints: lifePoints
                };
            } else {
                return player;
            }
        });

        setPlayers(updatedLifePoints);
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
                    updatePlayerName={updatePlayerName}
                    updateLifePoints={updateLifePoints}>
                    <div className="operations">
                        {player.isPlusClicked ? <FaCirclePlus className="operationIcons" onClick={() => { handleIsPlusClickedChange(index) }} /> : <CiCirclePlus className="operationIcons" onClick={() => { handleIsPlusClickedChange(index) }} />}
                        {player.isMinusClicked ? <FaCircleMinus className="operationIcons" onClick={() => { handleIsMinusClickedChange(index) }} /> : <CiCircleMinus className="operationIcons" onClick={() => { handleIsMinusClickedChange(index) }} />}
                        {player.isPlusClicked && <input type="text" autoFocus />}
                        {player.isMinusClicked && <input type="text" autoFocus />}
                    </div>
                </Player>
            ))}
        </>
    )
}

export default App
