import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskForm = props => {
    const {inputs, handleInputChange, handleSubmit, title, submitValue, isImportant, errors} = props;

    return (
        <form onSubmit={handleSubmit} className="col-6 mx-auto">
            <h2 className="text-center">{title}</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" className="form-control"  onChange={handleInputChange} value={inputs.title}/>
                <span className="txt-danger"></span>
            </div>
            <div className="form-group">
                <label htmlFor="important">Important:</label>
                <FontAwesomeIcon icon={["fas" ,"star"]} onClick={isImportant} />

            </div>
            <div className="form-group">
                <label htmlFor="due">Due Date:</label>
                <input type="datetime-local" name="due" className="form-control"  onChange={handleInputChange} value={inputs.due}/>
                <span className="txt-danger"></span>
            </div>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" className="form-control"  onChange={handleInputChange} value={inputs.location}/>
                <span className="txt-danger"></span>
            </div>
            <div className="form-group">
                <label htmlFor="priority">Priority:</label>
                <select type="text" name="priority" className="form-control"  onChange={handleInputChange} value={inputs.priority}>
                    <option value="Low">Low</option>
                    <option value="Med">Med</option>
                    <option value="High">High</option>
                </select>
                <span className="txt-danger"></span>
            </div>
            <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input type="text" name="contact" className="form-control"  onChange={handleInputChange} value={inputs.contact}/>
                <span className="txt-danger"></span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" className="form-control"  onChange={handleInputChange} value={inputs.description}/>
                <span className="txt-danger"></span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary" />
        </form>
    )
}

export default TaskForm;