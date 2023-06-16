Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])




//using promises
//movie example
console.log("person1:show ticket")
console.log("person2:show ticket")

const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('ticket');
  },3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) =>{
  console.log('wife:I have the ticks')
  console.log('husband:we should go in');
  console.log('wife:no I am hungry');
  return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
});
const getButter = getPopcorn.then((t)=>{
  console.log('I got some popcorn')
  console.log('husband:we should go in');
  console.log('wife:I need butter on my popcorn')
  return new Promise((resolve,reject)=>resolve(`${t} butter`))
});

const getDrink = getButter.then((t)=>{
  console.log('I got butter')
  console.log('husband:we should go in');
  console.log('wife:I need cococola')
  return new Promise((resolve,reject)=>resolve(`${t} cococola`))
});

getDrink.then((t)=>console.log((t)));
console.log("person4:show ticket")
console.log("person5:show ticket")

// async await
console.log("person1:show ticket")
console.log("person2:show ticket")

const preMovie = async() => {;

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve('ticket'),3000);
})
const getPopcorn = new Promise((resolve,reject) =>resolve( `popcorn`))
const addButter = new Promise((resolve,reject) =>resolve( `butter`))
const getColdDrinks = new Promise((resolve,reject) =>resolve(`coldDrink`))


let ticket = await promiseWifeBringingTicks; 

console.log('wife:I have the ticks')
console.log('husband:we should go in');
console.log('wife:no I am hungry');

let popcorn = await getPopcorn;

  console.log(`I got some ${popcorn}`)
  console.log('husband:we should go in');
  console.log('wife:I need butter on my popcorn')

  let butter = await addButter;

  console.log( `husband :I got some ${butter} on popcorn`);
  console.log(`husband :anaything else darling`)
  console.log(`wife:I need a cock`)
  console.log(`husband:ok `)

  let coldDrink = await getColdDrinks;
  console.log(`husband :here's some ${coldDrink}`)
  console.log(`husband :anything else darling`)
  console.log(`wife:lets go we are getting late`)
  console.log(`husband:thank you for the reminder `)

return ticket;
}
preMovie().then((m) =>console.log(`person3 :shows ${m}`));


console.log("person4:show ticket")
console.log("person5:show ticket")
