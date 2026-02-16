
import "./GameButtons.css"
import rockEmoji from "../../assets/rock-emoji.png";
import paperEmoji from "../../assets/paper-emoji.png";
import scissorsEmoji from "../../assets/scissors-emoji.png";

export function GameButtons({ handleClick }){
    
    return(
        <div className="game-buttons-container">

            <button className="game-buttons" data-choice="rock" onClick={handleClick}>
                <img className="rock-button-image" src={rockEmoji}/>
            </button>

            <button className="game-buttons" data-choice="paper" onClick={handleClick}>
                <img className="paper-button-image" src={paperEmoji}/>
            </button>

            <button className="game-buttons" data-choice="scissors" onClick={handleClick}>
                <img className="scissors-button-image" src={scissorsEmoji}/>
            </button>
        </div>
    )
}