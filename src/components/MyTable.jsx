import React from 'react'

export const MyTable = (props) => {
  return (
    <div>
      <table className='table table-dark'>
        <thead>
          <tr>
            {
              props.headers.map((th) => {
                return <th>{th}</th>
              })
            }
          </tr>
        </thead>

        <tbody>
          {
            props.data.map((tr) => {
              return (
                <tr >
                  {
                    props.headers.map((td) => {
                      return <td>{tr[td]}</td> // tr[td] as every time loop iterate it will print the detail of each thing 
                     })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}