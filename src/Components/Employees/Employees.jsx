import React from "react";
import e from "./Employees.module.css"

const Employees = (props) => {

    let employeesList = props.employees.map( employee => <div className={e.item}>{employee.name}</div>)

    return <div>
        {employeesList}
    </div>
}

export default Employees;
