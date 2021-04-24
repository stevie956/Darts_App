import React, { useState } from "react";

export const ScoreInputForm = (props) => {
 const [playerTurn, setPlayerTurn] =  useState(1);
 const player1Change = () => {
   setPlayerTurn(1)
 }
 const player2Change = () => {
  setPlayerTurn(2)
}

const scoreUpdate = (score) => {
  const newScore = props.player1Score - score
  if (playerTurn === 1 ) {
    props.setPlayer1Score(newScore);
    }
    if (playerTurn === 2 ) {
      props.setPlayer2Score(newScore)
    }
  
}
  return (
    <div>
      <div className="layout">
        <div className="column column-one">
          <h5 className="Player-Name">Player 1</h5>
          <h2 id="firstPlayerScore" className="score">
            {props.player1Score}
          </h2>
          <h5 id="three-dart-average">3-Dart Avg:</h5>
          <h5 id="legs">Legs:</h5>
        </div>
      </div>
      <div className="layout">
        <div className="multiplier">
          <button className="multiplier_button multiplier_single">Single</button>
          <button className="multiplier_button multiplier_double">Double</button>
          <button className="multiplier_button multiplier_double">Treble</button>
        </div>
      </div>
     
      <label><input type="radio" onChange={player1Change} checked={playerTurn === 1}></input>player1Score</label>
      <label><input type="radio" onChange={player2Change} checked={playerTurn ===2}></input>player2Score</label>
      <div className="num-pad">
        <button className="num-pad__button num-pad__numeric">1</button>
        <button className="num-pad__button num-pad__numeric">2</button>
        <button className="num-pad__button num-pad__numeric">3</button>
        <button className="num-pad__button num-pad__numeric">4</button>
        <button className="num-pad__button num-pad__numeric">5</button>
        <button className="num-pad__button num-pad__numeric">6</button>
        <button className="num-pad__button num-pad__numeric">7</button>
        <button className="num-pad__button num-pad__numeric">8</button>
        <button className="num-pad__button num-pad__numeric">9</button>
        <button className="num-pad__button num-pad__numeric">10</button>
        <button className="num-pad__button num-pad__numeric">11</button>
        <button className="num-pad__button num-pad__numeric">12</button>
        <button className="num-pad__button num-pad__numeric">13</button>
        <button className="num-pad__button num-pad__numeric">14</button>
        <button className="num-pad__button num-pad__numeric">15</button>
        <button className="num-pad__button num-pad__numeric">16</button>
        <button className="num-pad__button num-pad__numeric">17</button>
        <button className="num-pad__button num-pad__numeric">18</button>
        <button className="num-pad__button num-pad__numeric">19</button>
        <button className="num-pad__button num-pad__numeric" onClick={()=> {scoreUpdate(20)}}>20</button>
        <button className="num-pad__button num-pad__numeric">25</button>
        <button className="num-pad__button num-pad__numeric">50</button>
        <button className="num-pad__button num-pad__back">Back</button>
        <button className="num-pad__button num-pad__miss">Miss</button>
      </div>
      <div className="layout">
        <div className="column column-two">
          <h5 className="Player-Name">Player 2</h5>
          <h2 id="secondPlayerScore" className="score">
            {props.player2Score}
          </h2>
          <h5 id="three-dart-average">3-Dart Avg:</h5>
          <h5 id="legs">Legs:</h5>
        </div>
      </div>
    </div>
  );
};


