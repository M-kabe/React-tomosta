import React from 'react';
import './App.css';

function App() {
  let items = [
    { "name": "いちご", "price": "100" },
    { "name": "りんご", "price": "150" },
    { "name": "ばなな", "price": "200" }
  ]

  return (
    <div className="App container">
      <table className="table table-striped">
        <tbody>
          {items.map((value) => (
            <tr>
              <th scope="row">{value.name}</th>
              <td>{value.price}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
