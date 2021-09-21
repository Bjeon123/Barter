import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfilePageContainer from './profile/profile_container'
import PostShow from './post/post_show_container'
import { Route } from 'react-router';


const App = () => (
  <Switch>
    <Route exact path="/" component={MainPageContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/profile" component={ProfilePageContainer} />
    <ProtectedRoute exact path='/posts/:postId' component={PostShow} />
    <Route path='/home' component={MainPageContainer} />
  </Switch>
)

export default App;