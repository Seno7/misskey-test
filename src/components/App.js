import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './Content.js'
import Header from './Header.js'

function App() {
  return (
    <div className="App bg-body-secondary vh-100">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App
