let books = [
    {
      title: "Eloquent JavaScript",
      price: 16.00,
      inventory: 5
    },
    {
      title: "JavaScript: The Good Parts",
      price: 10.50,
      inventory: 10
    },
    {
      title: 'Learn JavaScript VISUALTYY',
      price: 25.00,
      inventory: 2
    },
    {
      title: 'You don\'t Know JavaScript',
      price: 60.00,
      inventory: 8
    },
    {
      title: 'JavaScript: The Definitive Guide',
      price: 18.95,
      inventory: 7
    },
  ]
//   function loopAndUpdate(array, updaterFoo) {
//     const updatedArray = [];
//     for (let item of array) {
//       // console.log(array)
//       // console.log(updatedArray)
//       updatedArray.push(updaterFoo(item))
//     }
//     return updatedArray
//   }
//   console.log(loopAndUpdate(books))

/* we create our own version of JavaScript's .map method 
to get a better understanding of what that method does and how it works. In the next video, you will see the built-in function in action.*/
//return an array of titles using own method
// function titles(item){
//     return item.title
// }
// console.log(books.map(titles))
//Using the dot map (.map) method to loop through 
//return an array of titles
/* const title = books.map(function(item){
return item.title
}*/
// const title = books.map(item => item.title)
const titles = books.map(item => item.title)

//return an array of prices using the js function
// function prices(item){
//     return item.price
// }
function pricesFun(item){
        return item.price
    }
    const prices = books.map(pricesFun)

//return an array of inventory
// function inventory(item){
//     return item.inventory
// }
//return an array using thedot map(.map)
const inventory =books.map(item => item.inventory)
//return an array of books, 50% off


// function halfOff(item){
//     let itemCopy = Object.assign({},item)
//     itemCopy.price = Math.floor(item.price/2)
//     return itemCopy
// }


//return an array of 50% off using dot map(.map)
/*Though this function it might be better to have it 
shorter especially if you intend to reuse */
// const halfOff = books.map(item => {
//     let itemCopy =Object.assign({}, item)
//     itemCopy.price = Math.floor(itemCopy.price/2)
//     return itemCopy
// })
/*alternatively use this format */
const halfOff =books.map(halfOffFun);

function halfOffFun(item){
    let itemCopy = Object.assign({},item)
    itemCopy.price = Math.floor(item.price/2)
    return itemCopy
}
