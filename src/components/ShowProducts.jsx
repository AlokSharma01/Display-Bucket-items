
import React from 'react'
import { useState } from 'react';

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

    let uniqueProductCount = new Map();
    let uniqueProducts = [];
    let itemName =[];
    let itemCount =[];

    for(let i=0;i<listOfProducts.length;i++){

        if(uniqueProductCount.has(listOfProducts[i].productName)){

            uniqueProductCount.set(listOfProducts[i].productName,uniqueProductCount.get(listOfProducts[i].productName)+1)
        }
        else{

            uniqueProductCount.set(listOfProducts[i].productName,1)

            uniqueProducts.push(listOfProducts[i])
        }
    }

    for(let [k,v] of uniqueProductCount){

        itemName.push(k);
        itemCount.push(v);
        
    }

    // console.log(countArray)
export const ShowProducts = () => {

    let [items, setItems] = useState(listOfProducts);
    let [count, setCount] = useState(true);

    

    const getUniqueProductCount=()=>{

        setCount(false)
    }

    const getUniqueProducts=()=>{

        setItems(uniqueProducts);
        setCount(true)
    }

    const showAll =()=>{

        setItems(listOfProducts);
        setCount(true);
    }

  return (
    <div>

        <div style={{marginTop:"100px"}}>
            <button onClick={getUniqueProductCount}>getUniqueProductCount</button><br/><br/>
            <button onClick={getUniqueProducts}>getUniqueProducts</button><br/><br/>
            <button onClick={showAll}>View All</button><br/>
        </div>

        {
            count===true?

            <div style={{marginLeft:"40%",marginTop:"100px"}}>
                <table>
                    <thead>
                        <tr style={{ color: "blue",}}>
                            <th>
                                Product name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th >
                                Description
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            items.map((item,index)=>{

                                return (
                                    <tr key={index}>
                                        <td>{item.productName}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            :
            <div style={{marginLeft:"40%",marginTop:"100px"}}>
                <table>
                    <thead>
                        <tr style={{ color: "blue" }}>
                            <th>
                                Product name
                            </th>
                            <th>
                                Count
                            </th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            itemName.map((item,index)=>{

                                return (
                                    <tr key={index} >
                                        <td>{item}</td>
                                        <td>{itemCount[index]}</td>
                                    </tr>
                                )
                            })
                        }

                         
                    </tbody>
                </table>

            </div>
        }


    </div>
  )
}
