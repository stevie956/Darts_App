import React from "react";

const ScoreInputForm = () => {
    return (
        <div>
          <div class="layout">
        <div class="column column-one">
          <h5 class="Player-Name">Player 1</h5>
          <h2 id="firstPlayerScore" class="score">501</h2>
          <h5 id="three-dart-average">3-Dart Avg:</h5>
          <h5 id="legs">Legs:</h5>
        </div>
        </div>
        <div class="layout">
<div class="multiplier">
    <button class="multiplier_button muktiplier_single">Single</button>
    <button class="multiplier_button muktiplier_double">Double</button>
    <button class="multiplier_button muktiplier_double">Treble</button>
</div>
        </div>
        <div class="num-pad">
            <button class="num-pad__button num-pad__numeric">1</button>
              <button class="num-pad__button num-pad__numeric">2</button>
              <button class="num-pad__button num-pad__numeric">3</button>
              <button class="num-pad__button num-pad__numeric">4</button>
              <button class="num-pad__button num-pad__numeric">5</button>
              <button class="num-pad__button num-pad__numeric">6</button>
              <button class="num-pad__button num-pad__numeric">7</button>
              <button class="num-pad__button num-pad__numeric">8</button>
              <button class="num-pad__button num-pad__numeric">9</button>
              <button class="num-pad__button num-pad__numeric">10</button>
              <button class="num-pad__button num-pad__numeric">11</button>
              <button class="num-pad__button num-pad__numeric">12</button>
              <button class="num-pad__button num-pad__numeric">13</button>
              <button class="num-pad__button num-pad__numeric">14</button>
              <button class="num-pad__button num-pad__numeric">15</button>
              <button class="num-pad__button num-pad__numeric">16</button>
              <button class="num-pad__button num-pad__numeric">17</button>
              <button class="num-pad__button num-pad__numeric">18</button>
              <button class="num-pad__button num-pad__numeric">19</button>
              <button class="num-pad__button num-pad__numeric">20</button>
              <button class="num-pad__button num-pad__numeric">25</button>
              <button class="num-pad__button num-pad__numeric">50</button>
              <button class="num-pad__button num-pad__back">Back</button>
              <button class="num-pad__button num-pad__miss">Miss</button>
        </div>
        <div class="layout">
        <div class="column column-two">
          <h5 class="Player-Name">Player 2</h5>
          <h2 id="secondPlayerScore" class="score">501</h2>
          <h5 id="three-dart-average">3-Dart Avg:</h5>
          <h5 id="legs">Legs:</h5>
        </div>
        </div>
        </div>
    )
}

export { ScoreInputForm };