/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/* function App(){
  var myarr=[11,12,33,44,55]
  var[v1,v2,v3,v4,v5]=myarr
  return(
    <>
    <h1>REACT DESTRUCTING</h1>
    <h2>{myarr[0]}</h2>
    <h2>{myarr[2]}</h2>
    <h2>v1:{v1}</h2>
    <h2>v2:{v2}</h2>
    <h2>v3:{v3}</h2>

    </>
  )
 }
export default App
*/
/*import React from 'react';

function App() {
  var myArr = [11, 12, 33, 44, 55];
  var myObj = {
    v1: myArr[0],
    v2: myArr[1],
    v3: myArr[2],
    v4: myArr[3],
    v5: myArr[4],
  };
  
  var { v1, v2, v3, v4, v5 } = myObj;
  return (
    <>
      <h1>REACT DESTRUCTING</h1>
      <h2>{myArr[0]}</h2>
      <h2>{myArr[3]}</h2>
      <h2>v1: {v1}</h2>
      <h2>v2: {v2}</h2>
      <h2>v3: {v3}</h2>
     
    </>
  );
}


export default App;
*/
/*import{useForm} from "react-hook-form"

function App(){
  const{register,handleSubmit}=useForm()
  const myfun=(data)=>{
    document.write(data.t1+"form"+data.t2)
  }
  return(
    <>
    <form onSubmit={handleSubmit(myfun)}>
      <input type="text" name="t1"{...register("t1")}></input>
      <input type="text" name="t2"{...register("t2")}></input>
      <input type="submit" value="click"></input>
      </form>
    </>
  )
}
export default App
*/
/*import{useForm} from "react-hook-form"

function App(){
  const{register,handleSubmit,formState:{errors}}=useForm()
  const myfun=(data)=>{
    document.write(data.name)
  }
  return(
    <>
    <form onSubmit={handleSubmit(myfun)}>
      <h1>React hook form Error Handling</h1>
      Enter user name:<input type="text" {...register("name",{required:true})}></input>
      {errors.name && errors.name.type==="required" &&(<font color="red">"must be filled</font>)}
      {errors.name && errors.name.type==="minLength" &&(<font color="red">"min length should be</font>)}
      <br></br>
      <input type="submit"></input>
    </form>
    </>
  )
}
export default App
*/
/*import React from "react"
class App extends React.Component
{
  constructor(props){
    super(props)
    this.state={
      rno:props.r,
      name:props.n,
      mark:100
    }
  }
  render(){
    return(
      <>
      <h1>Welcome to react life cycle</h1>
      <h2>{this.state.rno}</h2>
      <h2>{this.state.name}</h2>
      <h2>{this.state.mark}</h2>
      </>
    )
  }
}
export default App
*/

import axios from 'axios';
import './App.css';
function App(){
  var cname=""
  const myfun=(event)=>{
    event.preventDefault();
    document.getElementById("res1").innerHTML="<br> CITY NAME:"+cname
    var cityurl="https://api.openweathermap.org/data/2.5/weather?q="+cname+"&appid=b07a4ad398e7549ec7cb1f5a76d64828"
    axios.get(cityurl).then((response)=>{
      document.getElementById("res2").innerHTML="WEATHER REPORT:"+response.data.weather[0].main
      document.getElementById("res3").innerHTML="WIND SPEED:"+response.data.wind.speed
    })
    .catch((error)=>{
      if(error.response)
        {
          alert("FAILUER:"+error.response.data)
        }
      })
    }
    const addcity=(event)=>{
      cname=event.target.value
    }
    return(
      <>
      <form onSubmit={myfun}>
      <h1><center>AXIOS HTTP IMPLEMENTATION-API HANDLING PURPOSE</center></h1>
      <center> <input type="text" onChange={addcity} placeholder="ENTER YOUR CITY HERE"></input><br></br></center>
      <center> <input type="submit" value="FIND WEATHER REPORT"></input></center>
      </form>
      <div id="res1"></div>
      <div id="res2"></div>
      <div id="res3"></div>
      <div id="res4"></div>
       </>
    )
}
export default App
    

  

