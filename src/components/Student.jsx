import React, { useState } from 'react'
import { StudentList } from './StudentList'

export const Student = () => {

    var name = "RAJ"
    var age =23
    var studentObj ={
      id:1,name:"amit",rollno:7
    }
    var subjcets = ["Maths","science","Eng","Phy"]
    const  [sales, setsales] = useState(100)
    


  return (
    <div style={{textAlign:"center"}}>
        <h1>Students</h1>
        <StudentList name ={name} age = {age} stu = {studentObj} subjcets={subjcets}
          sales = {sales} setsales = {setsales}>
        </StudentList>
    </div>
  )
}