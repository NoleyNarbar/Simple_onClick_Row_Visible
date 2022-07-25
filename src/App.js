import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const handleClick = (event) => {
    setVisible((current) => !current);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>

      <table>
        <tr>
          <th>Name</th>
          <th>Favorite Ice Cream</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Norman</td>
          <td>Mint Chip</td>
          <td>9 Lari</td>
        </tr>
        <tr>
          <td>Norman</td>
          <td>Mint Chip</td>
          <td>9 Lari</td>
        </tr>
        {visible && (
          <tr>
            <td>Norman</td>
            <td>Mint Chip</td>
            <td>9 Lari</td>
          </tr>
        )}
      </table>
    </div>
  );
}
