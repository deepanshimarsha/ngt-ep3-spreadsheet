import { useContext, useState } from "react";
import Spreadsheet from "react-spreadsheet";
import { GeneratedSpreadsheet } from "./GeneratedSpreadsheet";
import { useAttributesContext } from "../AttributesContext";
import { Link, useNavigate } from "react-router-dom";

export const GenerateSpreadsheet = () => {

    const [input, setInput] = useState("");
    // const [attributes, setAttributes] = useState([]);

    const navigate = useNavigate();

    const {attributes, setAttributes} = useAttributesContext();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Value is needed!");
        } else {
            console.log(input);
            setAttributes([...attributes, input]);

            setInput("");
            console.log(attributes);
        }
    }

    const handleGenerate = (e) => {
        e.preventDefault();
        navigate("/spreadsheet-manager")
    }

    return (
        <div className="container">
            Enter The Set Of Attributes -
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    <div className="mb-3"><br />
                        <input type="text" className="form-control attr-field" id="attr-field1" placeholder="Eg: Country" value={input} onChange={handleInputChange} required />
                    </div>
                    {attributes.map((attr, index) => (
                        <div key={index} className="attributes-badges">
                            <span className="badge text-bg-primary">{attr}</span>
                        </div>
                    ))}
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Attribute</button><br /><br />
                    <button type="button" className="btn btn-success" onClick={handleGenerate}>Generate</button>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}
