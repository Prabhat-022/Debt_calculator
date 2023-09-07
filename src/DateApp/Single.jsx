import React, { useState } from 'react';
import photo from '../assets/mn.png'
import "./single.css"


const Single = () => {

  const [rows, setRows] = useState(1); // Initial row count

  const addRow = () => {
    setRows(rows + 1);
  };

  return (
    <div className="single">
      <h1>Debt Calculator</h1>
      <div >
        <img src={photo} alt="" />
        <hr />
        <h2>Raju</h2>
      </div>
      <div className="data">
        <table>
          <tr>
            <th>Product</th>
            <th>Weight</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>1 kg</td>
            <td>1/2/2023</td>
            <td>40 Rs</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>1 kg</td>
            <td>1/2/2023</td>
            <td>40 Rs</td>
          </tr>
          <tbody>
            {[...Array(rows)].map((_, index) => (
              <tr key={index}>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                
                  {index === rows - 1 ? (
                    <button onClick={addRow}>Add more</button>
                  ) : null}
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Single
