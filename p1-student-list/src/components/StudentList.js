import data from "./data";
import '../Styles/Student.css'
import { useState } from "react";
function StudentList() {

    const [sData, setSdata] = useState(data);

    function removeStudent(currIndex){
        let removeSdata=[...sData];
        removeSdata.splice(currIndex,1);
        setSdata(removeSdata);
    }

    return (
            <div className="conatiner">
                <div className="head">
                    <h1 className="heading">Student List</h1>
                    <h3 className="count">Total Students : {sData.length}</h3>
                </div>
                {
                    sData.map((student,index) => (
                        <div className="person" key={index}>
                            <div className="pic">
                                <img alt={student.name} src={student.image} />
                            </div>
                            <div className="details">
                                <p>Name : {student.name}</p>
                                <p>Contact : {student.contact}</p>
                            </div>
                            <div className="btn-remove-container">
                                <button className="btn-remove" onClick={()=>removeStudent(index)}>Remove</button>
                            </div>
                        </div>
                    )

                    )
                }
                <button onClick={() => setSdata([])} className="btn-clear"> clear list</button>
            </div>
    )
}

export default StudentList;