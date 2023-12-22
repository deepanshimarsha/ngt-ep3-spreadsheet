import React from 'react';
import { useAttributesContext } from '../AttributesContext';
import Spreadsheet from 'react-spreadsheet';

export const GeneratedSpreadsheet = () => {
    const {attributes, setAttributes} = useAttributesContext();

    let col = attributes
    let row = new Array(100).fill().map((_, index) => index );;
    const data = [
      [{ value: "Vanilla" }, { value: "Chocolate" }],
      [{ value: "Strawberry" }, { value: "Cookies" }],
    ];
    const data_length = attributes.length;
    let empty_arr = new Array(data_length).fill().map(() => ({}));
    console.log(empty_arr)
    let dataEntries = []
    for (let i = 0; i<= data_length; i++){
      dataEntries.push(empty_arr)
      
    }

    console.log(data_length)
    return (
      <div className='container'>
      <Spreadsheet data={dataEntries} columnLabels={col} rowLabels={row} />
      </div>
    )
}

