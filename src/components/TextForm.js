import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  function handleChangeText(event) {
    event.preventDefault();
    // console.log("text state : " + text);
    setText(event.target.value);
  }
  function handleUppercase() {
    let temptext = text.toUpperCase();
    setText(temptext);
    props.showAlert("Converted to uppercase", "success");
  }

  function handleLowercase() {
    let temptext = text.toLowerCase();
    setText(temptext);
    props.showAlert("Converted to lowercase", "success");
  }

  function handleCopy() {
    console.log(text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }

  function handleExtraspaces() {
    let extra = text.replace(/\s+/g, " ").trim();
    setText(extra);
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div>
        <div
          className="form-group"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleChangeText}
            value={text}
            rows="8"
            style={{
              background: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleUppercase}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleLowercase}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleExtraspaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((element) => {
                return element.length !== 0;
              }).length
          }{" "}
          words {text.length} character
        </p>
        <p>{0.0008 * text.split(" ").length} minutes </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in the Text Box above to preview here"}
        </p>
      </div>
    </>
  );
}
