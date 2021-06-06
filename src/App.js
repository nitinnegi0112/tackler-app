
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import Login from "./Login"
// import firebase from "./firebase"
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
function App() {
  const [user] = useAuthState(auth);
  return (
// BEM naming convention
    <div className="app">
      {!user ? (<Login />):(
<>
        <Header />
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
        </div>
</>
      )}      
      
    </div>
  );
}

export default App;
