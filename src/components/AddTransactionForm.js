import React, {useState} from "react";

function AddTransactionForm() {
  const [transaction, setTransaction] = useState([]); 
  const [newData, setNewData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  })

  function handleChange(event){
    let name = event.target.name
    let value = event.target.value
    setNewData ({  
      ...newData, [name]: value
    });
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData)
    })
      .then((response) => response.json())
      .then((data) => {
      const newTransactionData = [...transaction, data] 
      setTransaction(newTransactionData)
      })
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
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