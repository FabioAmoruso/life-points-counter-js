import { FaEdit } from "react-icons/fa";

function Player({ children, playerNumber, lifePoints }) {
    return (
        <div
            className="player"
            style={{ backgroundColor: playerNumber == 1 ? "rgba(88, 145, 255, 0.5)" : "rgba(255, 30, 30, 0.5)" }}>
            <div className="nameContainer">
                <p className="playerName">Player {playerNumber}</p><FaEdit className="editIcon"/>
            </div>
            <h1>{lifePoints}</h1>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Player;