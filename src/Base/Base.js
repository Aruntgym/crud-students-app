import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Base({title, description, children}) {
    const navigate = useNavigate()
  return (
    <div className='main-container'>
        <header>
        <nav>
        <AppBar position="static">
  <Toolbar variant="dense">

  <Typography sx={{ mr: 2 }}>
        Student-app
    </Typography>

    <IconButton edge="start" color="inherit" aria-label="Dashboard" onClick={()=>navigate("/")} sx={{ mr: 2 }}>
        Dashboard
    </IconButton>

    <IconButton edge="end" color="inherit" aria-label="students"  onClick={()=>navigate("/students")} sx={{ mr: 2 }}>
        Students
    </IconButton>

    <IconButton edge="end" color="inherit" aria-label="add student" onClick={()=>navigate("/add-student")} sx={{ mr: 2 }}>
        Add-student
    </IconButton>
   
  </Toolbar>
</AppBar>
            
                {/* <div>App-name</div>
                <div className='nav-btn-group'>
                <button onClick={()=>navigate("/")}>Dashboard</button>
                <button onClick={()=>navigate("/students")}>Students</button>
                <button onClick={()=>navigate("/add-student")}>Add Student</button>
            
                </div> */}
            </nav>
        </header>
        <main>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <div className='contents'>
                {children}
            </div>
        </main>
    </div>
  )
}

export default Base