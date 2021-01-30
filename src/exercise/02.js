// Compound Components
// http://localhost:3000/isolated/exercise/02.js

// 📜 https://reactjs.org/docs/react-api.html#reactchildren
// 📜 https://reactjs.org/docs/react-api.html#cloneelement

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return React.Children.map(children, child => React.cloneElement(child, {on, toggle}))
}

const ToggleOn = ({children, on}) => on === true && children
const ToggleOff = ({children, on}) => on === false && children
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />
const TextField = ({children}) => <span>{children}</span>

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <TextField>Hello</TextField>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App
