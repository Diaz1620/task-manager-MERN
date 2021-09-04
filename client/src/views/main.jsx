import {useState, useEffect} from 'react';
import Axios from 'axios';

const Main = props => {
    const [tasks,setTasks] = useState(false);


    useEffect(() => {
        Axios.get('http://localhost:8000/api/tasks')
            .then(res => setTasks(res.data.results))
            .catch(err => console.log(err))
    },[])

    return(
        tasks ?
            <section className='section-list'>
                {
                    tasks.map((t,i) => {
                        return <div key={i} className="task container">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <h6 className="px-1">{t.title}</h6>
                                </div>
                                <label>{t.due}</label>
                            </div>
                            <div className="d-flex justify-content-between">
                                <label>Description: {t.description}</label>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <label>Priority: {t.priority}</label>
                                <label>Location: {t.location}</label>
                                <label>Contact: {t.contact}</label>
                            </div>
                        </div>
                    })
                }
            </section> :
            <h2>Loading...</h2>
    )
}

export default Main