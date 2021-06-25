import './App.css';
import Title from './components/Title'
import Nav from './components/Nav'
import RecentScans from './views/RecentScans'
import Dashboard from './views/Dashboard'
import Page2 from './views/Page2'
import Page3 from './views/Page3'
import Visits from './views/Visits'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Message} from 'semantic-ui-react';

import { io } from "socket.io-client";

const socket = io("http://localhost:9000", {
  transports: ['websocket'],
  upgrade: false,
});

socket.on("connect", () => {
  console.log("Connected!");
  socket.emit("hello", "world");
});

socket.on("hello", msg => {
  console.log(msg);
})

socket.on("disconnect", () => {
  console.log("Disconnected!");
})


function App() {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  }

  return (
    <div className="mainDiv">
      <Router basename="/lpdb">
        <Title />      
        <Nav />
        <LiveDemoMessage visible={visible} handleDismiss={handleDismiss}/>
          <Switch>
            <Route path="/" exact component={RecentScans} />
            <Route path="/Dashboard" exact component={Dashboard} /> 
            <Route path="/page2" component={Page2} /> 
            <Route path="/page3" component={Page3} /> 
            <Route path="/visits" component={Visits} /> 
          </Switch>
      </Router>
      
    </div>
  );
}

function LiveDemoMessage(props) {
  if (props.visible) {
    return (
      <Message
      onDismiss={props.handleDismiss}
      header='Thank you for visiting the License Plate Database demo site!'
      content='This live demo version of LPDB project is deployed purely for demonstrative purposes. This product only accepts new data through Ultimate ALPR instance&apos;s license plate recognition, which isn&apos;t available currently for this demo site. Therefore new data cannot be inserted. However, currently existing data can be edited and deleted. Future updates may include a way to insert video files with license plates to allow end-to-end testing.'
    />
    )
  }
  if (!props.visible) {
    return([]);
  };
}

export default App;
