import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Principal from './components/Principal'
import Counter from './components/Counter'
import About from './components/About'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/counter" exact component={Counter} />
                <Route path="/about" exact component={About} />
            </Switch>
        </BrowserRouter>
    )
}