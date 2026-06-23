import React from 'react'

export const MapDemo3 = () => {
    let user = [
        {id : 1 ,name :"Saumya", age : 23},
       { id : 2,name :"Sam", age : 24},
       {id : 3 , name : "Ram",age : 25}

    ]
  return (
    <div>
        <table style = "border : 1px solid black">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            <tbody>
                {
                    user.map((m)=>{
                    return <tr>{m.id} {m.name} {m.age}</tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
