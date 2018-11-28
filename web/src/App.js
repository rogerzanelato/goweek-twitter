import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

// BrowserRouter: Tipo de rota, no caso do BrwoserRouter é o formato padrão
// Switch: garante que apenas uma rota seja chamada pelo usuário
// Route: path: Endereço na URL, component: componente do react que será renderizado
// Exact -> Colocamos esse atributo pois o react route verifica se a rota COMEÇA com o que definimos no path
// o exact garante que ele irá verificar apenas aquilo

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
