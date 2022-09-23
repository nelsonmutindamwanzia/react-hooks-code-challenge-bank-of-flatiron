import React from "react";

function Transaction({date, description, category, amount}) {
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
        </tr>
      </table>
    </React.Fragment>
  );
}

export default Transaction;