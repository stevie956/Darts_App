import React, { useState } from "react";

export const ScoreInputForm = (props) => {
  const [playerTurn, setPlayerTurn] = useState(1);
  const player1Change = () => {
    setPlayerTurn(1);
  };
  const player2Change = () => {
    setPlayerTurn(2);
  };

  const scoreUpdate = (score) => {
   
    if (playerTurn === 1) {
      const newScore = props.player1Score - score;
      props.setPlayer1Score(newScore);
    }
    if (playerTurn === 2) {
      const newScore = props.player2Score - score;
      props.setPlayer2Score(newScore);
    }
  };

  const buttons = Array(22).fill("");
  buttons[21] = 50;
  buttons[20] = 25;

  console.log("buttons", buttons);
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
          <button className="multiplier_button multiplier_double">
            Double
          </button>
          <button className="multiplier_button multiplier_double">
            Treble
          </button>
        </div>
      </div>

      <label>
        <input
          type="radio"
          onChange={player1Change}
          checked={playerTurn === 1}
        ></input>
        player1Score
      </label>
      <label>
        <input
          type="radio"
          onChange={player2Change}
          checked={playerTurn === 2}
        ></input>
        player2Score
      </label>
      <div className="num-pad">
        {buttons.map((el, i) => {
          console.log("el,i:", el, i);
          const n =  el ? el : i + 1;
          return (
            <button key={i} className="num-pad__button num-pad__numeric" onClick={() => scoreUpdate(n)}>{n}</button>
          );
        })}

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
