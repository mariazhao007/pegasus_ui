import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'


function App() {
// const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button className = "custom">Default button</Button>
        <Button disabled> Hello </Button>
        {/* <Button btnType = {ButtonType.Primary} size = {ButtonSize.Large}>Large Button</Button>
        <Button btnType = {ButtonType.Danger} size = {ButtonSize.Small}>Small Button</Button>
        <Button btnType = {ButtonType.Link} href="https://www.google.ca" disabled>google</Button> */}
        {/* <Button></Button>
        <Button></Button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
