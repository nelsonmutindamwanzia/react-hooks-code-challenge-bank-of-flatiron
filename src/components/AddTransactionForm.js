import React, {useState} from "react";

function AddTransactionForm() {
  function handleChange(){

  }

  function handleSubmit(){

  }

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input onChange = {handleChange} type="date" name="date" />
          <input onChange = {handleChange} type="text" name="description" placeholder="Description" />
          <input onChange = {handleChange} type="text" name="category" placeholder="Category" />
          <input onChange = {handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
