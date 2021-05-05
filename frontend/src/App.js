import "./App.css";
// import { FunctionalGameContainer } from "./components/GameOn/GameContainer";
import { Homepage } from "./components/HomePage/AccountForm";
// import { FunctionalGameContainer } from "./components/GameOn/GameContainer";
// import { Homepage } from "./components/HomePage/AccountForm";
// import { Game501Form } from "./components/NewGame/Game501";


function App() {
  return (
    <div>
      <div className="game" style={{backgroundImage: `url("https://i.imgur.com/DSNC5m0.jpg")`}}>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
