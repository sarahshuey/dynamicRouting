import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import details from './components/Details'
import explorer from './components/Explorer'
import films from './components/Films'
import BaseLayout from './components/Layout'
import people from './components/People'
import starships from './components/Starships'



ReactDOM.render(
    <BrowserRouter>
     <BaseLayout>
       <Switch>
         <Route exact path="/" component={explorer} />
         <Route path="/starships" component={starships} />
         <Route path="/films" component={films} />
         <Route path="/people" component={people} />
         <Route path="/details/:endpoint/:id" component={details} />
       </Switch>
     </BaseLayout>
   </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
