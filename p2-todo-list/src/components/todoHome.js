
import { useState, useEffect } from 'react';
import './todoHome.css'
import { MdDeleteOutline, MdDone } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
// import { GrEmergency } from 'react-icons/gr';
// import { IoMdDoneAll } from "react-icons/io";

export default function TodoHome() {
    const [option, setOption] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [completedList, setCompletedList] = useState([]);

    const now=new Date();
    
    useEffect(()=>{
        let getData=JSON.parse(localStorage.getItem("task")) || [];
        setTaskList(getData)
        let getCompletedData=JSON.parse(localStorage.getItem("completedTask")) || [];
        setCompletedList(getCompletedData);
    },[])

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(taskList));
    }, [taskList]);
    useEffect(() => {
        localStorage.setItem("completedTask", JSON.stringify(completedList));
    }, [completedList]);

    function addNewTask() {
        if (title === '' || description === '')
            alert("Enter the Valid Input..!")
        else {
            setTaskList([...taskList, { title, description }])
            // setTaskList(prevTasks => [...prevTasks, newTask]);
            // localStorage.setItem("task",JSON.stringify([...taskList]))
            document.getElementsByTagName('input')[0].value = '';
            document.getElementsByTagName('input')[1].value = '';
            setTitle('')
            setDescription('')
            toast.success('Added Successfully!', {
                theme:'dark',
                borderLeft:'5px solid green',
                autoClose:2000,
                color: '#27ee38'
            });
            setOption(false);
        }
    }

    function deleteTask(currentIndex) {
        //taskListCopy.splice(currentIndex, 1);
        if(option){
            Swal.fire({
                title:'Are You Sure ?',
                text:"If you delete task.I't can't retrived ",
                icon:'warning',
                showCancelButton:true,
                confirmButtonText:'Delete',
                cancelButtonText:'cancle'
            }).then((result=>{
                if(result.isConfirmed){//result.dismiss
                    let completedListCopy=[...completedList];
                    completedListCopy.splice(currentIndex,1)
                    setCompletedList(completedListCopy)
                    Swal.fire('Deleted','Task is Deleted','success')
                }
            }))
        }else{
            let taskListCopy=[...taskList]
            taskListCopy.splice(currentIndex,1);
            setTaskList(taskListCopy)
            Swal.fire('Added','To the Compleated List','success')
        }
    }

    function addToCompleatedList(currentIndex) {
        setCompletedList([...completedList, { title: taskList[currentIndex].title, description: taskList[currentIndex].description }]);
        console.log(completedList.title)
        deleteTask(currentIndex);
        // toast.success('Added To Compleated List',{
        //     theme:'dark'
        // })
    }

    return (
        <div>
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="cantainer">
                <div className="todo-input">
                    <div className='todo-input-item'>
                        <label>Title  </label>
                        <input
                            type="text"
                            placeholder="Enter Task"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='todo-input-item'>
                        <label>Description </label>
                        <input
                            type="text "
                            placeholder="Description of task"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button className='btn-add' onClick={addNewTask}>Add</button>
                    <ToastContainer />
                </div>
                <div className="status">
                    <button className={`btn-options ${option === false && 'active'}`} onClick={() => setOption(false)}>Todo</button>
                    <button className={`btn-options ${option === true && 'active'}`} onClick={() => setOption(true)}>Completed</button>
                </div>
                {
                    option ? //complete - button
                        completedList.map((task, index) => {
                                return (
                                    <div className="task-cantiner">
                                        <div className='left'>
                                            <h3>{task.title}</h3>
                                            <p>{task.description}</p>
                                            <p>Completed on : {now.getDate()}-{now.getMonth()}-{now.getFullYear()} at {now.getHours()}:{now.getMinutes()} H</p>
                                        </div>
                                        <div className='right'>
                                        <MdDeleteOutline
                                            className='icon-del'
                                            onClick={() => deleteTask(index)}
                                        />
                                        </div>
                                    </div>
                                )
                            })
                        :   taskList.map((task, index) => {  //TODO - button
                            return (
                                <div className="task-cantiner">
                                    <div className='left'>
                                        <h3>{task.title}</h3>
                                        <p>{task.description}</p>
                                    </div>
                                    <div className='right'>
                                        <MdDeleteOutline
                                            className='icon-del'
                                            onClick={() => deleteTask(index)}
                                        />
                                        <MdDone
                                            key={index}
                                            className='icon-done'
                                            onClick={() => addToCompleatedList(index)}

                                        />
                                        {/* <ToastContainer/> */}
                                    </div>
                                </div>
                            )
                        }) 
                                                    
                    }
            </div>
        </div>
    )
}