
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import PokemonList from "./container/PokemonList";
import PokemonWichList from "./container/PokemonWichList";
import Layaout from './components/Layaout';

const App=() => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route exact path="/pokemonwichlist" component={PokemonWichList}/>
        <Redirect to="/" />
      </Switch>
    </Layaout>
  </BrowserRouter>
);

export default App;
