import './App.css'
import StateComponent from './components/ClickCounter'
import UseStateDemo from './components/ClickCounter2'
import ControlledForm from './components/ControlledForm'
import ListOfStuff from './components/ListOfStuff'
import WindowApp from './components/WindowApp'

function App () {

  return (
    <div className="App">
      <StateComponent />
      <UseStateDemo />

      <WindowApp />

      <ListOfStuff />

      <ControlledForm />
    </div>
  )
}

export default App
