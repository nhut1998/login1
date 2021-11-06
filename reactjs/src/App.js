import React from 'react'
import './App.css';
import Binding from './routes/Binding'
import Style from './routes/Style/components/Style'
import State from './routes/State/components/State'
import Props from './routes/Props/components/Props'
import Components from './routes/Components/components/Components'
import LifeCycle from './routes/LifeCycle/components/LifeCycle'
import Functional from './routes/Functional/components/Functional'
import Redux from './routes/Redux/components/Redux'
// import Admin from './routes/Admin/components/Admin'
import List from './routes/Admin/modules/List'
import { Create, Edit } from './routes/Admin/modules/Form'
import Axios from './routes/Axios'
import TheCoffeeHouse from './routes/TheCoffeeHouse'
import { BrowserRouter as HaroRouter, Switch, Route, Redirect } from 'react-router-dom' // as: đang đặt tên lại cho nó. muốn đặt gì đặt
import ProductDetail from './routes/TheCoffeeHouse/modules/ProductDetail'
import Header from 'layouts/Header'
import AdminRedux from 'routes/AdminRedux';
import Login from './routes/Login'
import GuestLayout from 'layouts/Guest'

// guard: Authentication và Authorization --> câu hỏi pv là phải phân biệt được 2 cái này

function App() {
  return (
    <HaroRouter>
      <Switch>
        <Route
          path="/admin"
          render={routeProps => {
            if (localStorage.getItem('access_token')) {
              return (
                <>
                  <div className='text-center display-2'>Question admin</div>
                  <Route path={`${routeProps.match.url}/list`} component={List} exact />
                  <Route path={`${routeProps.match.url}/create`} component={Create} exact />
                  <Route path={`${routeProps.match.url}/:id/edit`} component={Edit} exact />
                </>
              )
            } else {
              return <Redirect to='/' />
            }
          }}
        />
        <Route 
          path="/user"
          render={routeProps => {
            return (
              <GuestLayout>
                <Route path={`${routeProps.match.url}/login`} component={Login} />
              </GuestLayout>
            )
          }}
        />
        {/* <AdminRedux /> */}
        <Route
          path="/"
          render={routeProps => {
            if (!localStorage.getItem('access_token')) {
              return <Redirect to='/user/login' />
            }

            return (
              ( // render props
                <>
                  <Header cart={[]} />
                  <Switch>
                    {ProductDetail}
                    {TheCoffeeHouse}
                    {Binding}
                    <Route path='/style'>
                      <Style />
                    </Route>
                    <Route path='/state'>
                      <State />
                    </Route>
                    <Route path='/props'>
                      <Props />
                    </Route>
                    <Route path='/components'>
                      <Components />
                    </Route>
                    <Route path='/life-cycle'>
                      <LifeCycle />
                    </Route>
                    <Route path='/functional'>
                      <Functional />
                    </Route>
                    <Route path='/redux'>
                      <Redux />
                    </Route>
                    <Route path='/axios'>
                      <Axios />
                    </Route>
                  </Switch>
                </>
              )
            )
          }}
        />
      </Switch>
    </HaroRouter>
  );
}

export default App;
