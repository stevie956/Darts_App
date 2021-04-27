import React, { useState } from 'react';
import { ScoreInputForm } from './ScoreInput';

export const FunctionalGameContainer = () => {
    
    const [player1Score, setPlayer1Score] = useState(501);
    const [player2Score, setPlayer2Score] = useState(501);
    const [player1Legs, setPlayer1Legs] = useState(0);
    const [player2Legs, setPlayer2Legs] = useState(0);
    // const [player1DartAverage, setPlayer1DartAverage] = useState(0);
    // const [multiplier, setMultiplier] = useState(1);


    
    return (
        <ScoreInputForm player1Score={player1Score} player1Legs={player1Legs} player2Score={player2Score} player2Legs={player2Legs} setPlayer1Score={setPlayer1Score} setPlayer1Legs={setPlayer1Legs} setPlayer2Score={setPlayer2Score} setPlayer2Legs={setPlayer2Legs} />
    )
}

