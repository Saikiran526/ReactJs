import data from "./data";
import '../Styles/Student.css'
import { useState } from "react";
function StudentList() {

    const [sData, setSdata] = useState(data);

    return (
            <div className="conatiner">
                <h1 className="heading">Student List</h1>
                <h3 className="count">Total Students : {sData.length}</h3>
                {
                    sData.map((student) => (
                        <div className="person">
                            <div className="pic">
                                <img alt={student.name} src={student.image} />
                            </div>
                            <div className="details">
                                <p>Name : {student.name}</p>
                                <p>Contact : {student.contact}</p>
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