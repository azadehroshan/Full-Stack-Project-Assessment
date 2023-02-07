import { useRef, useState } from "react";


const Add=({handelSave})=>{
    const [showStatus ,setShowStatus ] = useState("none")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
  
    const openForm = ()=>{
        setShowStatus("flex")
    } 

    const closeForm = ()=>{
        setShowStatus("none")
    }
 
    const saveVideo = () =>{
      //   199-2  Data Validation start
      if (!title) {
        alert("title is empty");
        return;
      } else if (!url) {
        alert("url is empty");
        return;
      } else if (!url.includes("https://youtu.be/")) {
        alert("url is not valid");
        return;
      }
      //   199-2  Data Validation end
      handelSave(title, url);
      setTitle("");
      setUrl("");
    }
   

    return (
        <div className="form">
            <button onClick={openForm}> Add New Video </button>
       
            <div style={{display:showStatus}}>
                <h3>ADD YOUR VIDEO</h3>   
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter Your Video Title"/>
                <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)} placeholder="Enter Your YouTube Link"/>
              
                <div className="action">
                    <button  className="cancle" onClick={closeForm}> Cancle</button>
                    <button className="save" onClick={saveVideo}> Save </button>
                </div>
            </div>


         </div>

    )
}



 export default Add