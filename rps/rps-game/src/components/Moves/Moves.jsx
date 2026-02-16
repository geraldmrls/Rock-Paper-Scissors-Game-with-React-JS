
import rockEmoji from "../../assets/rock-emoji.png";
import paperEmoji from "../../assets/paper-emoji.png";
import scissorsEmoji from "../../assets/scissors-emoji.png"

export function Moves({ choice, computerMove }) {
    
    if(!choice || !computerMove) return null

    let userEmoji = null;

    if(choice==="rock"){
        userEmoji = rockEmoji;
    }else if(choice === "paper"){
        userEmoji = paperEmoji;
    }else if (choice==="scissors"){
        userEmoji = scissorsEmoji;
    }

    let computerEmoji = null;
    if(computerMove === "rock"){
        computerEmoji = rockEmoji;
    }else if (computerMove==="paper"){
        computerEmoji = paperEmoji;
    }else if (computerMove === "scissors"){
        computerEmoji = scissorsEmoji;
    }

    return (
        <>
            <div className="user-computer-contianer">
                <div className="user-move-container">
                    <img className="hand-emojies" src={userEmoji} />
                    <span className="user-move-name">User move </span>
                </div>

                <div className="computer-move-container">
                    <img className="hand-emojies" src={computerEmoji} />
                    <span className="computer-move-name">Computer move </span>
                </div>
            </div>
        </>
    )
}