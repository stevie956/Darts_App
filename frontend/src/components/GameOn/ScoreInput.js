import React, { useState } from "react";
const p1Throws = [];
const p2Throws = [];
const dartAverage = (throws) => {
  console.log("Dart average...");
  if (throws.length > 0 && throws.length < 4) {
    const sum = throws.reduce((a, b) => a + b);
    return (sum / throws.length).toFixed(2);
  }
  return 0;
};

export const ScoreInputForm = (props) => {
  const [currentScoreP1, setCurrentScoreP1] = useState(0);
  // const [currentScoreP2, setCurrentScoreP2] = useState(0);
  const [p1TurnNum, setP1TurnNum] = useState(1);
  // const [p2TurnNum, setP2TurnNum] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [p1DartAverage, setP1DartAverage] = useState(0);
  const [p2DartAverage, setP2DartAverage] = useState(0);
  const player1Change = () => {
    setPlayerTurn(1);
  };
  const player2Change = () => {
    setPlayerTurn(2);
  };

  const scoreUpdate = (score) => {
    if (playerTurn === 1) {
      console.log("THROW!", p1TurnNum % 3 === 0);
      if (p1TurnNum % 3 === 0) {
        console.log("in here");
        console.log("current Score in if = ", currentScoreP1);
        setCurrentScoreP1(score + currentScoreP1);
        p1Throws.push(currentScoreP1);
        setCurrentScoreP1(0);
      } else {
        console.log("pressed button = ", score);
        console.log("currentScore before update ", currentScoreP1);
        const total = parseInt(score) + currentScoreP1;
        setCurrentScoreP1(total);
        console.log("current Score  after update = ", currentScoreP1);
        console.log("total = ", total);
      }
      setP1TurnNum(p1TurnNum + 1);

      const average = dartAverage(p1Throws);
      setP1DartAverage(average);
      if (multiplier) {
        score = score * multiplier;
        setMultiplier(0);
      }
      const newScore = props.player1Score - score;
      props.setPlayer1Score(newScore);
      if (newScore === 0) {
        props.setPlayer1Score(501);
        props.setPlayer2Score(501);
        props.setPlayer1Legs(props.player1Legs + 1);
      }
    }
    if (playerTurn === 2) {
      p2Throws.push(score);
      const average = dartAverage(p2Throws);
      setP2DartAverage(average);
      if (multiplier) {
        score = score * multiplier;
        setMultiplier(0);
      }
      const newScore = props.player2Score - score;
      props.setPlayer2Score(newScore);
      if (newScore === 0) {
        props.setPlayer1Score(501);
        props.setPlayer2Score(501);
        props.setPlayer2Legs(props.player2Legs + 1);
      }
    }
  };

  const buttons = Array(22).fill("");
  buttons[21] = 50;
  buttons[20] = 25;

  console.log("buttons", buttons);

  const [multiplier, setMultiplier] = useState(0);

  return (
    <div>
      <div className="layout">
        <div className="column column-one">
          <h5 className="Player-Name">Player 1</h5>
          <h2 id="firstPlayerScore" className="score">
            Score:
            {props.player1Score}
          </h2>
          <h5 id="three-dart-average">3-Dart Avg:{p1DartAverage}</h5>
          <h5 id="player1Legs" className="legs">
            Legs :{props.player1Legs}
          </h5>

          <h5 className="Player-Name">Player 2</h5>
          <h2 id="secondPlayerScore" className="score">
            Score:
            {props.player2Score}
          </h2>
          <h5 id="three-dart-average">3-Dart Avg:{p2DartAverage}</h5>
          <h5 id="player2Legs" className="legs">
            Legs:{props.player2Legs}
          </h5>
        </div>
      </div>

      <div className="multiplier">
        <button
          className="multiplier_button multiplier_double"
          onClick={() => setMultiplier(2)}
        >
          Double
        </button>
        <button
          className="multiplier_button multiplier_treble"
          onClick={() => setMultiplier(3)}
        >
          Treble
        </button>
      </div>

      <label>
        <input
          type="radio"
          onChange={player1Change}
          checked={playerTurn === 1}
        ></input>
        Player 1
      </label>
      <label>
        <input
          type="radio"
          onChange={player2Change}
          checked={playerTurn === 2}
        ></input>
        Player 2
      </label>

      <div className="num-pad">
        {buttons.map((el, i) => {
          // console.log("el,i:", el, i);
          const n = el ? el : i + 1;
          return (
            <button
              key={i}
              className="num-pad__button num-pad__numeric"
              onClick={() => {
                scoreUpdate(n);
              }}
            >
              {n}
            </button>
          );
        })}

        <button className="num-pad__button num-pad__back">Back</button>
        <button className="num-pad__button num-pad__miss">Miss</button>
      </div>
    </div>
  );
};
