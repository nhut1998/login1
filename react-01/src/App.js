import React from 'react'
import Binding from './routes/Binding/components/Binding'
import Style from './routes/Style/components/Style'
import State from './routes/State/components/State'
import Props from './routes/Props/components/Props'
import Components from './routes/Components/components/Components'
import TheCoffeeHouse from './routes/TheCoffeeHouse/components/TheCofffeeHouse'
import ProductDetail from './routes/TheCoffeeHouse/modules/ProductDetail'
import Header from './layouts/Header/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ChooseColor  from 'routes/ChooseColor/components/ChooseColor';



function App() {
  return (
    <Router>
      <Header />
      {/* <Binding />
      <Style />
      <State />
      <Props />
      <Components />
      <TheCoffeeHouse /> */}
        <Switch>
          { ProductDetail }
          <Route exact path='/binding' component={Binding} />
          <Route exact path='/style' component={Style} />
          <Route exact path='/state' component={State} />
          <Route exact path='/Props' component={Props} />
          <Route exact path='/Components' component={Components} />
          <Route exact path='/' component={TheCoffeeHouse} />
         
        </Switch>
    </Router>
  );
} 

export default App;
  {/* <ChooseColor /> */}
     
    
      
    