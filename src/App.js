import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        {
          routes.map((route, index) => (
            <Route key={index} {...route} />
          ))
        }
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
