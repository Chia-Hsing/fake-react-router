import './App.css'
import Router from './components/Router'
import Route from './components/Route'
import Switch from './components/Switch'
import Link from './components/Link'

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/">about</Link>
                    <Link to="/2">user</Link>
                    <Link to="/3">home</Link>
                </div>
                <Switch>
                    <Route path="/">
                        <One />
                    </Route>
                    <Route path="/2">
                        <Twe />
                    </Route>
                    <Route path="/3">
                        <Three />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
function One() {
    return <h2>1</h2>
}

function Twe() {
    return <h2>2</h2>
}

function Three() {
    return <h2>3</h2>
}

export default App
