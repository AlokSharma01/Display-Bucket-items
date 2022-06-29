/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




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

		
    
    function getUniquePrducts(listOfProducts){
    
    		let count = new Map();
        let uniqueProducts = [];


        for(let i=0;i<listOfProducts.length;i++){

            if(count.has(listOfProducts[i].productName)){

                count.set(listOfProducts[i].productName,count.get(listOfProducts[i].productName)+1)
            }
            else{

                count.set(listOfProducts[i].productName,1)

                uniqueProducts.push(listOfProducts[i])
            }
        }
        
        return uniqueProducts;
    
    }
    
    function getUniqueProductCount(listOfProducts){
    
    		let count ={};
    
        for(let i=0;i<listOfProducts.length;i++){

            if(count[listOfProducts[i].productName]===undefined){
            
            	count[listOfProducts[i].productName] = 1

            }
            else{

              count[listOfProducts[i].productName] = count[listOfProducts[i].productName]+1

            }
        }
        
        return count;
    
    }
    
    console.log(getUniqueProductCount(listOfProducts));
    
    console.log(getUniquePrducts(listOfProducts))