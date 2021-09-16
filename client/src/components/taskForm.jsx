// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../views/main.css'

const TaskForm = props => {
    const {inputs, handleInputChange, handleSubmit, title, submitValue, errors} = props;

    return (
        <form onSubmit={handleSubmit} className="">
            <h2 className="text-center">{title}</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" className="form-control"  onChange={handleInputChange} value={inputs.title}/>
                <span className="text-danger">
                    {errors.title ? errors.title.message: ""}
                </span>
            </div>
            {/* <div className="form-group">
                <label htmlFor="important">Important:</label>
                <FontAwesomeIcon icon={[important ? "fas":"far" ,"star"]} onClick={isImportant} onChange={handleInputChange} />

            </div> */}
            <div className="form-group">
                <label htmlFor="due">Due Date:</label>
                <input type="datetime-local" name="due" className="form-control"  onChange={handleInputChange} value={inputs.due}/>
                <span className="text-danger">
                    {errors.due ? errors.due.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" className="form-control"  onChange={handleInputChange} value={inputs.location}/>
                <span className="text-danger">
                    {errors.location ? errors.location.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="priority">Priority:</label>
                <select type="text" name="priority" className="form-control"  onChange={handleInputChange} value={inputs.priority}>
                    <option value="Low">Low</option>
                    <option value="Med">Med</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input type="text" name="contact" className="form-control"  onChange={handleInputChange} value={inputs.contact}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea cols="30" rows="10" name="description" className="form-control"  onChange={handleInputChange} value={inputs.description}/>
                <span className="text-danger">
                    {errors.description ? errors.description.message: ""}
                </span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary mt-2" />
        </form>
    )
}

export default TaskForm;