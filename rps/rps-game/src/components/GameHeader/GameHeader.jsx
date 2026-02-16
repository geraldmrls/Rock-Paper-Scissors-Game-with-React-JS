
import gameLogo from "../../assets/game-logo.svg"
import userImage from "../../assets/user.svg"
import"./GameHeader.css"

export function GameHeader(){
    return (
        <>
            <header>
                <div className="left-section">
                    <img className="game-logo" src={gameLogo}/>
                </div>

                <div className="middle-section">
                    <span className="header-link">Games</span>
                    <span className="header-link">Funds</span>
                    <span className="header-link">Progress</span>
                </div>

                <div className="right-section">
                    <span className="header-link">Account</span>
                    <img className="user-image" src={userImage} />
                </div>
                
            </header>
        </>
    )
}