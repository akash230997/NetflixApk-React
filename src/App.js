import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './Card';
import Data from './data';

const functionA = currValue=> <Card imglink={currValue.imglink} Name = {currValue.Name}  Link = {currValue.Link} Netflix = {currValue.Netflix} />

// function functionA(currVal){
//   return (
//     <Card
//       imglink={currVal.imglink}
//       Name={currVal.Name}
//       Link={currVal.Link}
//       Netflix={currVal.Netflix} />
//   )
// }


function App(props){
  return(
    <>
      <h1 className="nav">LIST OF TOP NETFLIX SERIES IN 2022</h1>
      {Data.map(functionA)};
      {/* <Card 
        imglink={Data[0].imglink}
        Name={Data[0].Name} 
        Link={Data[0].Link}
        Netflix={Data[0].Netflix}/> */}

      {/* <Card 
        imglink={Data[1].imglink}
        Name={Data[1].Name}
        Link={Data[1].Link}
        Netflix={Data[1].Netflix}/>


      <Card imglink={Data[2].imglink}
        Name={Data[2].Name}
        Link={Data[2].Link}
        Netflix={Data[2].Netflix} />


      <Card imglink={Data[3].imglink}
        Name={Data[3].Name}
        Link={Data[3].Link}
        Netflix={Data[3].Netflix} />


      <Card imglink={Data[4].imglink}
        Name={Data[4].Name}
        Link={Data[4].Link}
        Netflix={Data[4].Netflix} />


      <Card imglink={Data[5].imglink}
        Name={Data[5].Name}
        Link={Data[5].Link}
        Netflix={Data[5].Netflix} />


      <Card imglink={Data[6].imglink}
        Name={Data[6].Name}
        Link={Data[6].Link}
        Netflix={Data[6].Netflix} /> */}
    </>
  )
    
}



export default App;