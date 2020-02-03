import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ClassCounter from './Components/ClassCounter/ClassCounter'
import HooksCounter from './Components/HooksCounter/HooksCounter'
import DataDash from './Components/DataDash/DataDash'


export default (
    <Switch>
        <Route exact path='/class_example' component={ClassCounter} />
        <Route exact path='/hooks_example' component={HooksCounter} />
        <Route exact path='/' component={DataDash} />
    </Switch>
)