import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import GameOver from "./components/GameOver";
import Instrucciones from "./components/Instrucciones";
import Playing from "./components/Playing/Playing";
import PrincipalButtons from "./components/PrincipalButtons";
import PrincipalPage from "./components/PrincipalPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={PrincipalPage} />
      <Route path="/" exact component={PrincipalButtons} />
      <Route path="/playing" component={Playing} />
      <Route path="/gameover" component={GameOver} />
      <Route path="/instrucciones" component={Instrucciones} />
    </BrowserRouter>
  );
}

export default App;
