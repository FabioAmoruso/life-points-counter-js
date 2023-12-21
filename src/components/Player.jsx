import { FaEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react'
import { initialPlayers } from "../App";

function Player({ children, playerId, playerName, playerNumber, lifePoints, updatePlayerName, updateLifePoints }) {

    const [name, setName] = useState(`${playerName} ${playerNumber}`);
    const [isEditIconClicked, setIsEditIconClicked] = useState(false);
    const playerNameField = useRef(null);

    const handleNameChange = (newName, index) => {
        setName(newName);
        updatePlayerName(newName, index);
    }

    const handleEdit = () => {
        setIsEditIconClicked(isEditIconClicked => !isEditIconClicked);
    }

    useEffect(() => {
        if (isEditIconClicked) {
            playerNameField.current.focus();
            playerNameField.current.select();
        }
    }, [isEditIconClicked]);

    return (
        <div
            className="player"
            style={{ backgroundColor: playerNumber === 1 ? "rgba(88, 145, 255, 0.5)" : "rgba(255, 30, 30, 0.5)" }}>
            <div className="nameContainer">
                <FaEdit className="editIcon" onClick={handleEdit} />
                <input
                    className={`playerName ${isEditIconClicked && "editPlayerName"}`}
                    value={name}
                    ref={playerNameField}
                    readOnly={!isEditIconClicked}
                    onChange={(e) => handleNameChange(e.target.value, playerId)}
                    onKeyDown={(e) => { e.key === "Enter" && handleEdit() }}
                    style={{ width: `${name.length}ch` }} />
            </div>
            <h1>{lifePoints}</h1>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Player;