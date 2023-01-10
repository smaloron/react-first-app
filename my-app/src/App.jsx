import './App.css'
import StateComponent from './components/ClickCounter'
import UseStateDemo from './components/ClickCounter2'
import ListOfStuff from './components/ListOfStuff'
import WindowApp from './components/WindowApp'

function App () {

  return (
    <div className="App">
      <StateComponent />
      <UseStateDemo />

      <WindowApp />

      <ListOfStuff />
    </div>
  )
}

export default App
