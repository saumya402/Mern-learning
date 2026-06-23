import React from 'react'

export const MapDemo2 = () => {
    let user = [
        {id : 1 ,name :"Saumya", age : 23},
       { id : 2,name :"Sam", age : 24},
       {id : 3 , name : "Ram",age : 25}

    ]
  return (
    <div>
        {
            user.map((m)=>{
                return <li>{m.id} {m.name} {m.age}</li>
            })
        }
    </div>
  )
}
