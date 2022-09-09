import React from 'react';
import Amazon from './Amazon';
// import ReactDOM from 'react-dom';
// import Card from './Card';
// import Data from './data';
import Netflix from './Netfflix';



// const functionA = (currValue, index) =>  <Card imglink={currValue.imglink} Name={currValue.Name} Link={currValue.Link} Netflix={currValue.Netflix} /> 
// const functionA = (currValue, index) =>{
//   return(
//     <Card key={currValue.id}
//     imglink={currValue.imglink}
//     Name={currValue.Name}
//     Link={currValue.Link}
//     Netflix={currValue.Netflix}/>
//   )
// } 

// function functionA(currVal){
//   return (
//     <Card
//       key = {currVal.id}
//       imglink={currVal.imglink}
//       Name={currVal.Name}
//       Link={currVal.Link}
//       Netflix={currVal.Netflix} />
//   )
// }
// const favS = 'Amazon';


function Option(){
  // prompt("")
  const favS = "Please Choose Netflix || Amazon ";
  if (prompt(favS) ==='Netflix'){
    return <Netflix />
  } else if (prompt(favS) === 'Amazon'){
    return <Amazon />
  } else {
    prompt("That's not right, try again");
  }
}



function App(){
  return(
    <>
      {/* {option('netfflix')} */}
      <h1 className="nav">LIST OF TOP NETFLIX SERIES IN 2022</h1>
      <Option />
      {/* {(favS === 'netflix')? <Netflix /> : <Amazon />} */}
    </>
  )
}
export default App;