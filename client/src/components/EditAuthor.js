import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

// import Form from "./Form";
import { navigate } from "@reach/router";


const EditAuthor = (props) => {


    const { id } = props;

    const [ errors, setErrors ] = useState("")

    const [ editedAuthor, setEditedAuthor ] = useState({
        name: ""
    })


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setEditedAuthor(res.data.name)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])


    const editSubmitHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, {editedAuthor})
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/error")
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

            <Header 
                link={"/"}
                linkText={"Home"}
                titleText={"Favorite Authors"}
                descriptionText={"Edit this author"}
            />
            


            <form onSubmit={editSubmitHandler}>

                <div>
                    <label style={{display:"flex", textAlign:"left"}} >Name: </label>
                    <input value={editedAuthor} onChange={(e)=>setEditedAuthor(e.target.value)} type="text" name="name"></input>
                
                    
                        {
                            errors.name ?
                            <span>{errors.name.message}</span>
                            :null
                        }
                    
                </div>
                <br/>
                <div style={{width:"200px", display:"flex", justifyContent: "space-evenly"}} > 
                    <button className="formButton" onClick={(e)=> navigate("/")}>Cancel</button>
                    <button className="formButton" >Submit</button>
                </div>

            </form>




            {/* <Form
                author={editedAuthor}
                setAuthor={setEditedAuthor}
                submitHandler={editSubmitHandler}
                errors={errors}

            /> */}


        </div>

    )
}


export default EditAuthor;