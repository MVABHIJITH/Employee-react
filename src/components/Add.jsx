import React, { useState } from 'react'
import { allEmployeesAPI } from '../services/allAPI';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function Add({ setEmployeeUpdate }) {
    const [employeeDetails, setEmployeeDetails] = useState({
        employeeName: '',
        age: '',
        designation: '',
        experince: '',
        salary: ''

    })
    console.log(employeeDetails);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setEmployeeDetails({ ...employeeDetails, employeeName: "", age: "", designation: "", experince: "", salary: "" })
    }
    const handleShow = () => setShow(true);

    const handleDetails = async () => {
        const { employeeName, age, designation, experince, salary } = employeeDetails
        if (employeeName && age && designation && experince && salary) {
            const result = await allEmployeesAPI(employeeDetails)
            console.log(result.data);
            if (result.status >= 200 && result.status < 300) {
                alert(`${result.data.employeeName} details successfully added`)
                setEmployeeUpdate(result?.data)
                handleClose()

            } else {
                alert('Failed to fetch API')
            }


        } else {
            alert('Please fill the form completely!!!')
        }
    }

    return (
        < >
            <div>
                <button onClick={handleShow} className='btn btn-danger rounded mt-5'>Add Employee <i class=" ms-2 fa-solid fa-user-plus"></i> </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel
                        controlId="floatingInputEmployee"
                        label="Employee Name"
                        className="mb-3">
                        <Form.Control value={employeeDetails.employeeName} onChange={(e) => setEmployeeDetails({ ...employeeDetails, employeeName: e.target.value })}
                            type="text" placeholder="Employee Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInputAge"
                        label="Age"
                        className="mb-3">
                        <Form.Control value={employeeDetails.age} onChange={(e) => setEmployeeDetails({ ...employeeDetails, age: e.target.value })}
                            type="number" placeholder="Age" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInputDesignation"
                        label="Designation"
                        className="mb-3">
                        <Form.Control value={employeeDetails.designation} onChange={(e) => setEmployeeDetails({ ...employeeDetails, designation: e.target.value })}
                            type="text" placeholder="Designation" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInputexperince"
                        label="experince"
                        className="mb-3">
                        <Form.Control value={employeeDetails.experince} onChange={(e) => setEmployeeDetails({ ...employeeDetails, experince: e.target.value })}
                            type="text" placeholder="experince" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInputSalary"
                        label="Salary"
                        className="mb-3">
                        <Form.Control value={employeeDetails.salary} onChange={(e) => setEmployeeDetails({ ...employeeDetails, salary: e.target.value })}
                            type="number" placeholder="Salary" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleDetails} variant="primary">Submit</Button>
                </Modal.Footer>

            </Modal>


        </>
    )
}

export default Add