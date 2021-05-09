import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom'
import HomePage from '../components/HomePage'
import About from '../components/About'
import Test from '../components/Test'
import { withRouter } from "react-router";
import Hello from './Hello'

class Home extends Component{

    state={
        cats:[]
    }

    handleHomePageClick = () => {
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path = '/' component={ HomePage }/>
                    <Route exact path = '/about' component={ () => <About handleHomePageClick = {this.handleHomePageClick}/> }/>
                    <Route exact path = '/test' component={ Test }/>
                    <Route exact path = '/hello' component={ Hello }/>
                </Switch>
            </div>
        )
    }

}

export default withRouter(Home)