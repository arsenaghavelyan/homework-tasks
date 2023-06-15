import { useState } from "react"

function Form() {
    const [task,setTask] = useState([])
    function getTasks(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const taskName = formData.get("task-name")
        const taskTime = formData.get("task-time")
        const newTask = {
            name:taskName,
            time:taskTime
        }
        setTask([...task,newTask])
        e.target.reset()
    }
    return(
        <div className="form-cont">
            <form onSubmit={getTasks}>
                <label htmlFor="task-name">Task Name:</label>
                <input type="text" id="task-name" name="task-name"/>

                <label htmlFor="task-time">Task Time</label>
                <input type="time" id="task-time" name="task-time"/>

                <button type="submit">ADD</button>
            </form>
            <div className="taskAllInfo">
                <h2>Tasks</h2>
                {
                    task.map((el,i)=>{
                        return(
                            <div  key={i}>
                                <span>{el.name}</span>
                                <span>-</span>
                                <span style={{fontWeight:"bold"}}>{el.time}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
export default Form