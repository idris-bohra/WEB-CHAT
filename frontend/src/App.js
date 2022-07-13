import socketIO from 'socket.io-client'
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Chat from './Component/Chat'
import {Login} from './Component/Login'

const ENDPOINT = 'http://localhost:5000';
const socket =  socketIO(ENDPOINT , {transports : ['websocket']});

function App() {

  socket.on('connnect', ()=>{
    
  })


  return (
    <>
      <Router> 
        <Switch>
          <Route exact path="/join">
            <Login/>
          </Route>
          <Route exact path="/chat/:user">
            <Chat/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
