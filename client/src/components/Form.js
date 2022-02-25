// import { navigate } from "@reach/router";
// import React from "react";



// const Form = (props) =>{

//     const { author, setAuthor, submiteHandler, errors} = props;


//     const onChangeHandler = (e) =>{

//         const newObject = {...author};

//         newObject[e.target.name] = e.target.value;

//         console.log("e.target.name = ", e.target.name)
//         console.log("e.target.value = ", e.target.value)

//         setAuthor(newObject);
//     }

//     return(

//         <div>
//             <form onSubmit={submiteHandler}>
                
//                 <div>
//                     <label style={{display:"flex", textAlign:"left"}} >Name: </label>
//                     <input value={author.name} onChange={onChangeHandler} type="text" name="name"></input>
                
//                     <p>
//                         {
//                             errors.name ?
//                             <span>{errors.name.message}</span>
//                             :null
//                         }
//                     </p>
//                 </div>
                
//                 <div style={{width:"200px", display:"flex", justifyContent: "space-evenly"}} > 
//                     <button className="formButton" onClick={(e)=> {navigate("/")}}>Cancel</button>
//                     <button className="formButton" >Submit</button>
//                 </div>






//             </form>
//         </div>


//     )
// }

// export default Form;