import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import { getAllEmployeeDetailsAPI, removeEmployeeDetailsAPI } from '../services/allAPI'


function Home() {

  const [allEmployees, setAllEmployees] = useState([])
  const [employeeUpdate, setEmployeeUpdate] = useState("")


  const getAllEmployeeDetails = async () => {
    const result = await getAllEmployeeDetailsAPI()
    // console.log(result);
    if (result?.status == 200) {
      //    console.log(result?.data);
      setAllEmployees(result.data)

    }

  }

  useEffect(() => {
    getAllEmployeeDetails()

  }, [employeeUpdate])

  // console.log(allEmployees);

  const deleteEmp = async (empId) => {
    await removeEmployeeDetailsAPI(empId)
    getAllEmployeeDetails()
  }


  return (
    <>

      <div className='container'>
        <Add setEmployeeUpdate={setEmployeeUpdate} />
      </div>

      <div className='container mt-3 border rounded p-3'>
        <h4 className='text-primary fw-bolder text-center py-3'>Employee Details</h4>

        <table className='table fw-bolder mt-5 '>
          <thead>
            <tr>
              <th className='text-warning'>Id</th>
              <th className='text-warning'>Employee Name</th>
              <th className='text-warning'>Age</th>
              <th className='text-warning'>Designation</th>
              <th className='text-warning'>Experince</th>
              <th className='text-warning'>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              allEmployees?.length > 0 ? allEmployees?.map((details, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{details.employeeName}</td>
                  <td>{details.age}</td>
                  <td>{details.designation}</td>
                  <td>{details.experince}</td>
                  <td>{details.salary}</td>
                  <td><button onClick={() => deleteEmp(details.id)} className='btn'><i className="fa-solid fa-trash text-danger py-2"></i></button></td>
                </tr>
              )) : <div className='text-danger fw-bolder'>Nothing to display</div>
            }
          </tbody>
        </table>
      </div>

      <div className='mt-5'>
        <img height={"800px"} width={"100%"} src="https://i2.wp.com/cdn.dribbble.com/users/1052957/screenshots/4153213/offcie.gif" alt="" />
      </div>  

    </>
  )
}

export default Home