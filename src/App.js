import { useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { data } from './Data/Data'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';
import Nopage from './Nopage';


function App() {
  const [students, setStudents] = useState(data)
  return (
    <div className="App">

      <Routes>

          <Route exact path="/" element = {<Dashboard/>
        }/>

          <Route path="/students" element={<Students
          students = {students}
          setStudents = {setStudents}/>
          }/>

          <Route path="/add-student"
          element ={<AddStudents
            students = {students}
            setStudents = {setStudents}
          />}/>

          <Route
          path="/edit/:id"
          element={<EditStudents
            students = {students}
            setStudents = {setStudents}
          />}
          />

          <Route 
          path='*'
          element={<Nopage/>}
          />

      </Routes>

      {/* <Students
      students = {students}
      setStudents = {setStudents}
      />
       */}
    </div>
  );
}

export default App;
