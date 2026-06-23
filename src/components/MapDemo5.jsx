import React from 'react'

export const MapDemo5 = () => {
    var products = [
  {id:1, name:"iPhone 15", category:"Electronics", price:79999, stock:25, rating:4.7, brand:"Apple", discount:10, isAvailable:true, createdAt:"2026-01-10"},
  {id:2, name:"Samsung Galaxy S24", category:"Electronics", price:69999, stock:30, rating:4.5, brand:"Samsung", discount:12, isAvailable:true, createdAt:"2026-02-15"},
  {id:3, name:"Nike Running Shoes", category:"Footwear", price:4999, stock:50, rating:4.3, brand:"Nike", discount:20, isAvailable:true, createdAt:"2026-03-01"},
  {id:4, name:"Adidas Sneakers", category:"Footwear", price:4599, stock:9, rating:4.2, brand:"Adidas", discount:18, isAvailable:true, createdAt:"2026-01-20"},
  {id:5, name:"Dell Inspiron Laptop", category:"Computers", price:55999, stock:15, rating:4.4, brand:"Dell", discount:15, isAvailable:true, createdAt:"2026-02-05"},
  {id:6, name:"HP Pavilion Laptop", category:"Computers", price:58999, stock:12, rating:4.3, brand:"HP", discount:14, isAvailable:true, createdAt:"2026-03-10"},
  {id:7, name:"Sony Headphones", category:"Accessories", price:2999, stock:60, rating:4.6, brand:"Sony", discount:25, isAvailable:true, createdAt:"2026-01-25"},
  {id:8, name:"Boat Earbuds", category:"Accessories", price:1499, stock:100, rating:4.1, brand:"Boat", discount:30, isAvailable:true, createdAt:"2026-02-18"},
  {id:9, name:"LG Smart TV", category:"Electronics", price:45999, stock:20, rating:4.5, brand:"LG", discount:17, isAvailable:false, createdAt:"2026-03-05"},
  {id:10, name:"Mi Smart Watch", category:"Wearables", price:3999, stock:70, rating:4.2, brand:"Xiaomi", discount:22, isAvailable:true, createdAt:"2026-01-30"},
  {id:11, name:"Puma T-Shirt", category:"Clothing", price:999, stock:80, rating:4.0, brand:"Puma", discount:35, isAvailable:true, createdAt:"2026-02-12"},
  {id:12, name:"Levi's Jeans", category:"Clothing", price:2499, stock:45, rating:4.4, brand:"Levis", discount:28, isAvailable:false, createdAt:"2026-03-08"},
  {id:13, name:"Canon DSLR Camera", category:"Electronics", price:65999, stock:10, rating:4.6, brand:"Canon", discount:13, isAvailable:true, createdAt:"2026-01-18"},
  {id:14, name:"Philips Trimmer", category:"Personal Care", price:1999, stock:55, rating:4.3, brand:"Philips", discount:20, isAvailable:true, createdAt:"2026-02-22"},
  {id:15, name:"Wildcraft Backpack", category:"Bags", price:1799, stock:65, rating:4.2, brand:"Wildcraft", discount:27, isAvailable:true, createdAt:"2026-03-12"}
];
  return (
    <div>
        <table class="table table-dark">
            <thead>
                <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Category</th>
                   <th>Price</th>
                   <th>Stock</th>
                   <th>Rating</th>
                   <th>Brand</th>
                   <th>Discount</th>
                   <th>Status</th>
                   <th>Credit Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((pr)=>{
                        return <tr style={{backgroundColor:pr.price < 2000 && "lightgreen"}}>
                            <td>{pr.id}</td>
                            <td>{pr.name}</td>
                            {/* <td style={{color : pr.category == "Electronics" ? "blue" : "black"}}>{pr.category}</td> */}
                            <td style={{fontStyle : pr.category == "Clothing " && "italic"}}>{pr.category}</td>
                            <td style={{color : pr.price > 5000 ? "red":"black"}}>{pr.price}</td>
                           <td style={{ color: pr.stock === 0 ? "red" : "green" }}>
                            {pr.stock === 0 ? "Out of stock" : "In stock"}</td>
                            {/* <td style={{color : pr.stock < 10 ? "orange": "black"}}>{pr.stock} </td> */}
                            {/* <td style={{backgroundColor : pr.stock == 0 ? "lightgrey" : "white"}}>{pr.stock}</td> */}
                            {/* <td style={{fontFamily : pr.rating > 4.5 && "bold"}}>{pr.rating}</td> */}
                            <td style={{color : pr.rating < 3 ? "red" : "black"}}>{pr.rating}</td>
                            <td style={{color : pr.brand == "Apple" || pr.brand == "Sony" ? "purple" : "black"}}>{pr.brand}</td>
                            {/* <td style={{backgroundColor : pr.discount > 20 ? "yellow" : "white" }}>{pr.discount}</td> */}
                            <td>{pr.discount } {pr.discount > 20 && "🔥 Hot Deal"} </td>
                            {/* <td style={{opacity : pr.isAvailable==false ? "0.5":"1"}}>{pr.isAvailable == true ? "Active" : "Not Active"}</td> */}
                            <td>{pr.isAvailable == true ? "Active" : "Not Active"} {pr.isAvailable == true ? "Available" : "Not Available"}</td>
                            <td>{pr.createdAt}</td>

                        </tr>
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

// 1.

// Change text color to red if price > 50000, otherwise **black`.

// 2.

// If stock === 0, show text "Out of Stock" in red, otherwise show **"In Stock" in green`.

// 3.

// Make background yellow if discount > 20, otherwise **white`.

// 4.

// If rating >= 4.5, make text bold, otherwise normal.

// 5.

// Reduce opacity to 0.5 if isAvailable === false, otherwise **1`.

// 6.

// If category === "Electronics", set text color blue, otherwise **black`.

// 7.

// If brand === "Apple" OR brand === "Sony", set text color purple, otherwise **black`.

// 8.

// If price < 2000, set background lightgreen, otherwise no background.

// 9.

// Show "🔥 Hot Deal" only if discount >= 25.

// 10.

// If stock < 10, show text color orange, otherwise **green`.

// 11.

// If rating < 3, show text color red, otherwise **black`.

// 12.

// If isAvailable === false, show text "Not Available", otherwise **"Available"`.

// 13.

// If price > 20000 AND discount > 10, set text color blue, otherwise **black`.

// 14.

// If category === "Clothing", make font style italic, otherwise normal.

// 15.

// If stock === 0, set background lightgray, otherwise **white`.