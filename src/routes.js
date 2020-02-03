import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ClassCounter from './Components/ClassCounter/ClassCounter'
import HooksCounter from './Components/HooksCounter/HooksCounter'


export default (
    <Switch>
        <Route exact path='/' component={ClassCounter} />
        <Route exact path='/hooks_example' component={HooksCounter} />
    </Switch>
)