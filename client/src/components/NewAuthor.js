import { navigate, Link } from "@reach/router";
import { useState } from "react";
import axios from "axios";

// import Header from "./Header";
// import Form from "./Form";




const NewAuthor = (props) =>{


    const [ errors, setErrors ] = useState({})

    const [ addNewAuthor, setAddNewAuthor ] = useState("")



    const newSubmitHandler = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", {addNewAuthor})
            .then((res)=>{
                console.log(res)
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response)
                console.log("err.response.data:", err.response.data)
                console.log("err.response.data.errors:", err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }


    return(

        <div>



        <header>
            <h1>Favorite authors</h1>
            <Link className="headerLinkColor" to={"/"} >Home</Link>
            <h4 className="descriptionText" >Add a new Author</h4>

        </header>

            {/* <Header 
                link={"/"}
                linkText={"Home"}
                titleText="Favorite Authors"
                descriptionText={"Add a new Author:"}
            /> */}


            <form onSubmit={newSubmitHandler}>

                <div>
                    <label style={{display:"flex", textAlign:"left"}} >Name: </label>
                    <input value={addNewAuthor} onChange={(e)=> setAddNewAuthor(e.target.value)} type="text" name="name"></input>
                
                    
                        {
                            errors.name ?
                            <span>{errors.name.message}</span>
                            :null
                        }
                    
                </div>
                <br/>
                <div style={{width:"200px", display:"flex", justifyContent: "space-evenly"}} > 
                    <button className="formButton" onClick={(e) => navigate("/")}>Cancel</button>
                    <button className="formButton" >Submit</button>
                </div>

            </form>



            {/* <Form 
                author={newAuthor}
                setAuthor={setNewAuthor}
                submitHandler={newSubmitHandler}
                errors={errors}
            /> */}

        </div>

    )
}


export default NewAuthor;