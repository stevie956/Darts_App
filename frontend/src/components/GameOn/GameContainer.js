import React, { useState } from 'react';
import { ScoreInputForm } from './ScoreInput';

export const FunctionalGameContainer = () => {
    
    const [player1Score, setPlayer1Score] = useState(501);
    const [player2Score, setPlayer2Score] = useState(501);
    // const [multiplier, setMultiplier] = useState(1);


    
    return (
        <ScoreInputForm player1Score={player1Score} player2Score={player2Score} setPlayer1Score={setPlayer1Score} setPlayer2Score={setPlayer2Score}/>
    )
}

