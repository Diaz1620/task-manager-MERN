import { useState } from 'react';
import Axios from 'axios';
import TaskForm from '../components/taskForm';
import { navigate } from '@reach/router';

const Create = props => {
    // const [important,setImportant] = useState(false)
    
    // const toggleImportant = e => {
    //     console.log("Button pressed");
    //     let star = !important;
    //     setImportant(star);
    //     console.log(`changed to ${star}`);
    // }
    // var isImportant =  <FontAwesomeIcon icon={["fas" ,"star"]} onClick={toggleImportant} />;
    

    const [form,setForm] = useState({
        title: "",
        // important: important,
        due: "",
        location: "",
        priority: "",
        contact: "",
        description: ""
    })

    const [errors, setErrors] = useState({
        title: "",
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
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div className="task-form">
            <TaskForm 
                inputs={form}
                title="Create Task"
                submitValue="Create"
                handleInputChange={handleChange}
                // isImportant={toggleImportant}
                handleSubmit={handleSubmit}
                errors={errors}
                // important = {important}
            />
        </div>
    )
}

export default Create;