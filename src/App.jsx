import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useState } from 'react'
import './App.css'
import Player from "./components/Player";

const initialPlayers = [
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


    const handleNameChange = (e) => {
        setPlayers({ ...players, name: e.target.value });
    }

    const handleLifePointsChange = (e) => {
        setPlayers({ ...players, lifePoints: e.target.value });
    }

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

    return (
        <>
            <div className="header">
                <h1>IT'S TIME TO D-D-DUEL!</h1>
                <p>Calculate your life points.</p>
            </div>

            {players.map((player, index) => (
                <Player
                    key={player.id}
                    playerNumber={player.id + 1}
                    lifePoints={player.lifePoints}>
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
