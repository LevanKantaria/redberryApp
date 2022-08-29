import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./PageTwo.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store";

function BasicDragAndDrop(props) {
  const dispatch = useDispatch();
  const [dragIsValid, setDragIsValid] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [imageName, setImageName] = useState('');


  const uploadHandler = (event) => {
    event.preventDefault();

   
  };
  
  
  let files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(()=>{

    if(localStorage.getItem('image-name')){
      setImageName(localStorage.getItem('image-name'))
    }
    
  },[])
  
  
  useEffect(() => {
    if (files.length > 0) {
      setImageName(acceptedFiles[0].name)
      console.log("upload");
      setDragIsValid(true);
      dispatch(filterActions.dragAndDropState(dragIsValid));
      props.onChange();
      var reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = function () {
        console.log(reader.result);
        
        dispatch(filterActions.dragAndDropImage(reader.result))
        localStorage.setItem('image', reader.result)
        localStorage.setItem('image-name', acceptedFiles[0].name )
        console.log(acceptedFiles[0].name)
        
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      return;
    }
    
    
  }, [files]);
  
  
  
  
  useEffect(() => {
    if (localStorage.getItem('image') ) {
     
    }
  }, [files]);

  return (
    <section>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={props.className}
      >
        <input {...getInputProps()} />
        <div className={classes.dragText}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</div>

        <button className={classes.button} onClick={uploadHandler}>
          {" "}
          ატვირთე
        </button>
        {imageName}
      </div>

      <aside></aside>
    </section>
  );
}

export default BasicDragAndDrop;
