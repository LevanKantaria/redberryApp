import React from "react";
import { useDropzone } from "react-dropzone";
import classes from "./PageTwo.module.css";

function BasicDragAndDrop(props) {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const uploadHandler = (event) => {
    event.preventDefault();

    if (files.length > 0) {
      console.log("upload");
      return;
    }
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className={classes.dragDrop}
      >
        <input {...getInputProps()} />
        <div className={classes.dragText}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</div>

        <button  className={classes.button} onClick={uploadHandler}> ატვირთე</button>
        <ul>{files}</ul>
      </div>
    
      <aside></aside>
    </section>
  );
}

export default BasicDragAndDrop;
