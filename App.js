
import './App.css';
//import React from 'react';
import React, { Component } from 'react';  


class App extends React.Component {  
 constructor() {    
      super();  
      this.state = {  
         data:   
         [  
            {             
               name:"Abhishek"             
            },  
            {            
               name:"Saharsh"             
            },  
            {    
               name:"Ajay"          
            }  
         ]  
      }  
   }  
   render() {  
      return (  
         <div>  
            <StudentName/>  
            <ul>            
                {this.state.data.map((item) => <List data = {item} />)}           
            </ul>  
         </div>  
      );  
   }  
}  
class StudentName extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Student Name Detail</h1>  
         </div>  
      );  
   }  
}  
class List extends React.Component {  
   render() {  
      return (  
         <ul>            
            <li>{this.props.data.name}</li>   
         </ul>  
      );  
   }  
}  

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={data:"prabha"}
//   }
//   render()
//   {
//     return(
//       <div>
//         <h1>{this.state.data} is a good</h1>
//         <Same/>
//         <Mani/>
//       </div>
//     );
//   }
// }
// class Same extends React.Component{
//   render(){
//     return(
//       <h1>HI How Are You?</h1>
//     );
//   }
// }

// class Mani extends React.Component{
//   render(){
//     return(
//       <h2>React Js</h2>
//     );
//   }
// }

//import React from 'react';


// class App extends React.Component {
// constructor(){
//   super();
//   this.state={data:"prabha"}
// }
//   render()
//   {
//     return(
//       <div>            
//          <h1> {this.state.data} is a good person </h1>          
//       </div>
//     );
//   }
// }

export default App;

