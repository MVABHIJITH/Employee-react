import {commonAPI} from './commonAPI'
import {SERVER_URL} from './server_url'
//Add employee details

export const allEmployeesAPI=async(details)=>{
    return await commonAPI("POST",`${SERVER_URL}/employee`,details)
}

//get employee details

export const getAllEmployeeDetailsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/employee`,"")
}

//delete employee details

export const removeEmployeeDetailsAPI=async(empId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/employee/${empId}`,{})
}