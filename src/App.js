import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditUsers from './components/EditUsers';
import {useState} from 'react';
function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

  let [users,setUsers] = useState([
      {
        name:"Vignesh",
        email:"vignesh@gmail.com",
        mobile:"9545665516",
        earnings:"400000"
      },
      {
        name:"Vinoth",
        email:"vinoth@gmail.com",
        mobile:"9854564568",
        earnings:"300000"
      },
      {
        name:"Shankaran",
        email:"shankaran@gmail.com",
        mobile:"7825564656",
        earnings:"150000"
      }
  ]);

  return <>
    <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-users' element={<AllUsers data={{users,setUsers}}/>}/>
                      <Route path = '/add-users' element={<AddUsers data={{users,setUsers}}/>}/>
                      <Route path ='/edit-users/:id' element={<EditUsers data={{users,setUsers}}/>}/>
                      <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;
