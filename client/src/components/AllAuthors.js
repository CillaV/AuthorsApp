import { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from 'axios';

import Header from "./Header";


const AllAuthors = (props) => {

    const [ authorList, setAuthorList ] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])


        const deleteAuthor = (idFromBelow) =>  {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)           // filters through all games whose id DOES NOT EQUAL the idFromBelow creating an array whos id does not match the one from below
                setAuthorList(authorList.filter((author, index)=>author._id !== idFromBelow))  // map and filter similar syntax; map is like a for loop; filter is like an if statment based on specifications
            }) // would not have to use filter if simply deleting from OneGame component
                // because we want it to disappear immediately and on this current component we need to handle state on the front end
            .catch((err)=>{
                console.log(err)
            })
    }

    return(

        <div>
            
            <Header 
                link={"/new"}
                linkText={"Add an author"}
                titleText={"Favorite Authors"}
                descriptionText={"We have quotes by:"}
            />

            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                    
                </thead>
                <tbody>
                    
                        
                        {
                            authorList?

                            authorList.map((author, index)=>(
                                <tr className="authorList" key={index}>
                                        <td className="authorColor">{author.name}</td>
                                    
                                        <td className="buttons">
                                            <button className="editButton" onClick={()=> navigate(`/edit/${author._id}`)}>
                                                Edit
                                                {/* <Link className="linkColor" to={`/edit/${author._id}`} >Edit</Link> */}
                                            </button>
                                            <button className="deleteButton" onClick={()=> deleteAuthor(author._id)}>Delete</button>
                                        </td>
                                </tr>
                                
                                        
                                        
                                
                            ))

                            :null
                        }
                        
                    
                </tbody>

            </table>
            {/* {
                authorList.map((author, index)=>(
                    <div className="authorList" key={index}>
                        <div>
                            {author.name}
                            <button className="editButton">
                                <Link to={`/author/edit/${author._id}`} >Edit</Link>
                            </button>
                            <button className="deleteButton">Delete</button>
                        </div>
                            
                            
                    </div>
                ))
            } */}


        </div>

    )
}


export default AllAuthors;