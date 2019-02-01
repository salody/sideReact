import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

const PrimaryLayout = () => (
  <div>
    <header>React router 4 App</header>
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UserSubLayout} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

const HomePage = () => <div>Home Page</div>

const UserSubLayout = ({ match }) => {
  console.log('url', match.url)
  console.log('path', match.path)
  return (
    <div className="user-sub-layout">
      <aside>
        <UserNav />
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={match.path} exact component={BrowseUsersPage} />
          <Route path={`${match.path}/:userId`} component={UserProfilePage} />
        </Switch>
      </div>
    </div>
  )
}

const UserNav = () => (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
)

const BrowseUsersPage = () => <div>BrowseUsersPage</div>
const UserProfilePage = () => <div>UserProfilePage</div>

const App = () => (
  <HashRouter>
    <PrimaryLayout />
  </HashRouter>
)

export default App
