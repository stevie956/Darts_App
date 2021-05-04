import "./App.css";
import { FunctionalGameContainer } from "./components/GameOn/GameContainer";
// import { ScoreInputForm } from "./components/GameOn/ScoreInput";
// import { ScoreInputForm } from './components/GameOn/ScoreInput';
// import { Homepage } from "./components/HomePage/AccountForm";
// import { Game501Form } from "./components/NewGame/Game501";
// import { FunctionalGameContainer } from './components/GameOn/GameContainer';
// // import LoginApp from './components/Login/Login';
// import { LoginForm } from './components/Login/LoginForm';

// import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <div>
      <div className="game" style={{backgroundImage: `url("https://i.imgur.com/DSNC5m0.jpg")`}}>
        <FunctionalGameContainer />
      </div>
    </div>
  );
}

export default App;
