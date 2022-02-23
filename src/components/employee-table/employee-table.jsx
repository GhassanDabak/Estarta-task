import React from 'react'
import "./employee-table.css"
import { Table } from "react-bootstrap";

function EmployeeTable({employees,loading}) {
    if (loading) {
        return <h2>Loading...</h2>;
      }
  return (
      
    <div>
         <Table striped bordered hover responsive className='mt-3'>
            <thead>
              <tr>
                <th>Log ID <i className="fa-solid fa-circle-arrow-up customize"></i></th>
                <th>Application Type <i className="fa-solid fa-circle-arrow-up customize"></i></th>
                <th>Application ID <i className="fa-solid fa-circle-arrow-up customize"></i></th>
                <th>Action <i className="fa-solid fa-circle-arrow-up customize"></i></th>
                <th>Action Details <i className="fa-solid fa-circle-arrow-up customize"></i></th>
                <th>Date : Time <i className="fa-solid fa-circle-arrow-up customize"></i></th>
              </tr>
            </thead>
            <tbody>
                {employees.map((employee,ind) => (
                    <tr key={ind}>
                      <td>{employee.logId}</td>
                      <td>{employee.applicationType}</td>
                      <td>{employee.applicationId}</td>
                      <td>{employee.actionType}</td>
                      <td class="not-found"> -/-</td>
                      <td>{employee.creationTimestamp}</td>
                    </tr>
                ))}
            </tbody>
          </Table>
    </div>
  )
}

export default EmployeeTable