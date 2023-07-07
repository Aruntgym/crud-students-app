import React, { useEffect } from 'react'
import { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'


function EditStudents({students, setStudents}) {
    const {id} = useParams();
    const navigate = useNavigate()
    const[idx, setId] = useState("")
    const[name, setName] = useState("")
    const[batch, setBatch] = useState("")
    const[gender, setGender] = useState("")
    const[education, setEducation] = useState("")

    useEffect(()=> {
        const studentData =students.find(stud => stud.id === id);
        if(studentData){
            setId(studentData.id)
            setName(studentData.name)
            setBatch(studentData.batch)
            setGender(studentData.gender)
            setEducation(studentData.education)
        }

    },[id, students]
    )
    const updateStudent = ()=>{
        //update the student
        const studIndex = students.findIndex((stud)=>stud.id === id)
        const updateStudent ={
            id,
            name,
            batch,
            gender,
            education
        }
        students[studIndex] = updateStudent
        setStudents([...students])
        navigate("/students")
    }

  return (
    <Base
    title = {"Edit Student"}
    description={"Fill the form to edit student info"}
    >
    <div className='form-group'>
    <h4>Update Student</h4>
    <TextField label="Id" variant="outlined" fullWidth sx={{ m: 1}}
    placeholder='Enter Id of student'
    type='number'
    value={idx}
    onChange={(e)=>setId(e.target.value)}
    />
    <TextField label="Name" variant="outlined" fullWidth sx={{ m: 1}}
    placeholder='Enter Name of student'
    type='text'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <TextField label="Batch" variant="outlined" fullWidth sx={{ m: 1}}
    placeholder='Enter Batch of student'
    type='text'
    value={batch}
    onChange={(e)=>setBatch(e.target.value)}
    />
    <TextField label="Gender" variant="outlined" fullWidth sx={{ m: 1}}
    placeholder='Enter Gender of student'
    type='text'
    value={gender}
    onChange={(e)=>setGender(e.target.value)}
    />
    <TextField label="Education" variant="outlined" fullWidth sx={{ m: 1}}
    placeholder='Enter Eduction of student'
    type='text'
    value={education}
    onChange={(e)=>setEducation(e.target.value)}
    />
    <div>
    <Button onClick={updateStudent} variant='contained'>Update Student</Button>
    </div>
</div>
</Base>
  )
}

export default EditStudents