import { useState } from 'react';
import Axios from 'axios';
import TaskForm from '../components/taskForm';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Create = props => {
    var important = true
    
    const toggleImportant = e => {
        console.log("Button pressed");
        if(important === true) {
            <FontAwesomeIcon icon={["far", "fa-star"]} onClick={toggleImportant}></FontAwesomeIcon>;
            important = false
            console.log("false");
        }else{
            <FontAwesomeIcon icon={["fas", "fa-star"]} onClick={toggleImportant}></FontAwesomeIcon>;
            important = true
            console.log("true");
        }
        
    }

    // var isImportant =  <FontAwesomeIcon icon={["fas" ,"star"]} onClick={toggleImportant} />;
    

    const [form,setForm] = useState({
        title: "",
        "important": important,
        due: "",
        location: "",
        priority: "",
        contact: "",
        description: ""
    })
    
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/tasks",form)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <>
            <TaskForm 
                inputs={form}
                title="Create Task"
                submitValue="Create"
                handleInputChange={handleChange}
                isImportant={toggleImportant}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Create;