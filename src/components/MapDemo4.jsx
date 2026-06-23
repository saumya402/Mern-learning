import React from 'react'

export const MapDemo4 = () => {
    const product = [
{id : 1 , name : "Tv",price : 200000,Quantity : 3,color : "Black ",type : "Electric",brand : "Samsung"},
{ id: 2, name: "Laptop", price: 85000, Quantity: 5, color: "Silver", type: "Electric", brand: "Dell" },
{ id: 3, name: "Mobile", price: 60000, Quantity: 10, color: "Blue", type: "Electric", brand: "Apple" },
{ id: 4, name: "Refrigerator", price: 45000, Quantity: 2, color: "Grey", type: "Electric", brand: "LG" },
{ id: 5, name: "Washing Machine", price: 30000, Quantity: 4, color: "White", type: "Electric", brand: "Whirlpool" },
{ id: 6, name: "Headphones", price: 5000, Quantity: 15, color: "Black", type: "Electric", brand: "Sony" },
{ id: 7, name: "Air Conditioner", price: 55000, Quantity: 3, color: "White", type: "Electric", brand: "Daikin" }
    ]
  return (
    <div>
       <table border = {1} class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Color</th>
                    <th>Type</th>
                    <th>Brand</th>
                </tr>
                
            </thead>
            <tbody>
                {
                product.map((m)=>{
                    return <tr>
                        <td>{m.id}</td>
                        <td>{m.name}</td>
                        <td>{m.price}</td>
                        <td>{m.Quantity}</td>
                        <td>{m.color}</td>
                        <td>{m.type}</td>
                        <td>{m.brand}</td>

                    </tr>
                }
            )
                }
            </tbody>
       </table>
    </div>
  )
}
