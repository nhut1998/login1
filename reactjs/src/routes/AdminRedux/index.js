import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import List from './modules/List'
import { Create, Edit } from './modules/Form'

export default function AdminRedux() {
  return (
    <Route
      path="/admin-redux"
      render={routeProps => {
        if (localStorage.getItem('access_token')) {
          return (
            <>
              <div className='text-center display-2'>Question admin redux</div>
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
  )
}
