import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BioAgua from './pages/BioAgua';
import BioDigestor from './pages/BioDigestor';
import EcoFogao from './pages/EcoFogao';
import EnergiaEolica from './pages/EnergiaEolica';
import EnergiaSolar from './pages/EnergiaSolar';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/bio-agua" exact component={BioAgua} />
                <Route path="/bio-digestor" exact component={BioDigestor} />
                <Route path="/eco-fogao" exact component={EcoFogao} />
                <Route path="/energia-eolica" exact component={EnergiaEolica} />
                <Route path="/energia-solar" exact component={EnergiaSolar} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;