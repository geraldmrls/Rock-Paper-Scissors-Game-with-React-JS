
import { useState, useEffect } from "react";
import { GameButtons } from "../GameButtons/GameButtons.jsx";
import { Moves } from "../Moves/Moves.jsx";
import "./GameContent.css"


export function GameContent() {

    const [choice, setChoice] = useState(null);
    const [computerMove, setComputerMove] = useState(null);
    const [activeClass, setActiveClass] = useState("");
    const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem("game-score")
        return savedScore? JSON.parse(savedScore) : {
            wins: 0,
            losses: 0,
            ties: 0
        }
    });


    function handleClick(event) {
        const userChoice = event.currentTarget.dataset.choice;

        const moves = ["rock", "paper", "scissors"];
        const computerChoice = moves[Math.floor(Math.random() * 3)];

        setChoice(userChoice);
        setComputerMove(computerChoice);

        if (userChoice === computerChoice) {
            setScore(prev => ({
                ...prev,
                ties: prev.ties + 1
            }));
            setActiveClass("ties-active")
            setTimeout(() => {
                setActiveClass("");
            }, 700);
        } else if (
            (userChoice === "rock" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "rock")
        ) {
            setScore(prev => ({
                ...prev,
                losses: prev.losses + 1
            }));
            setActiveClass("losses-active")
            setTimeout(() => {
                setActiveClass("");
            }, 700);
        } else {
            setScore(prev => ({
                ...prev,
                wins: prev.wins + 1
            }));
            setActiveClass("wins-active");
            setTimeout(() => {
                setActiveClass("");
            }, 700);
        }

    }


    useEffect(()=>{
        localStorage.setItem("game-score", JSON.stringify(score))
    }, [score])

    return (
        <>
            <link rel="icon" href="./src/assets/game-logo.svg" />
        
            <div className="game-container">
                <h1 className="game-title">Rock, Paper, Scissors</h1>

                <GameButtons handleClick={handleClick} />

                <Moves choice={choice} computerMove={computerMove} />

                <div className="score">
                    <div><span className={activeClass === "wins-active" ? "wins-active" : ""}>Wins</span>:
                        <span> {score.wins}</span>
                    </div>

                    <div><span className={activeClass === "losses-active" ? "losses-active" : ""}>Losses</span>:
                        <span> {score.losses}</span>
                    </div>

                    <div><span className={activeClass === "ties-active" ? "ties-active" : ""}>Ties</span>:
                        <span> {score.ties}</span>
                    </div>
                </div>

            </div>

        </>
    )
}