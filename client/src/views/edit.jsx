import { useState, useEffect} from "react";
import Axios from "axios";
import TaskForm from "../components/taskForm";
import { navigate } from "@reach/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Edit = props => {

    const [form, setForm] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/tasks/${props.id}`)
            .then(res => setForm(res.data.results[0]))
            .catch(err => console.log(err))
    },[props])

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

        Axios.put(`http://localhost:8000/api/tasks/${props.id}`,form)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }


    return(
        <>
            {
                form ?
                <div className="task-form">
                    <TaskForm 
                        inputs={form}
                        title="Edit Task"
                        submitValue="Edit"
                        handleInputChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                </div> : <h2>Loading...</h2>
            }
        </>
    )
}

export default Edit;