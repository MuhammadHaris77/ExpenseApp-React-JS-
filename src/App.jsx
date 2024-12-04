import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [cashIn, setCashIn] = useState(0)
  const [inputVal, setInputVal] = useState('')
  const [cashOut, setCashOut] = useState(0)
  const [Balance, setBalance] = useState(0)
  const [category, setCategory] = useState()
  const [categoryType, setCategoryType] = useState()
  const [history, setHistory] = useState([])
  const addAmount = () => {
    const amount = parseFloat(inputVal);

    if (!amount) {
      alert("please Enter Expense? ")
      return
    }

    console.log(cashIn)
    if (category === "Cash In") {
      const newCashIn = cashIn + amount;

      setCashIn(newCashIn)
      setBalance(newCashIn)
      setHistory([...history, { date: new Date(), amount, category, categoryType }])

    } else if (category === "Cash Out") {
      const newCashOut = cashOut + amount;

      setCashOut(newCashOut)
      setBalance(Balance - inputVal)
      setHistory([...history, { date: new Date(), amount, category, categoryType }])
      return
    }

    setInputVal('')
    console.log(category)
    console.log(categoryType)
  }
  console.log(history)

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row  text-center  '>
          <div className='col'>
            <button type="button" style={{ width: "100%" }} className="btn btn-dark p-3 m-3"><h1>Cash In</h1></button>
            <h1>{cashIn ? cashIn : 0}</h1>
          </div>
          <div className='col'>
            <button type="button" style={{ width: "100%" }} className="btn btn-dark p-3  m-3"><h1>Cash  Out</h1></button>
            <h1>{cashOut ? cashOut : 0}</h1>
          </div>
          <div className='col'>
            <button type="button" style={{ width: "100%" }} className="btn btn-dark p-3  m-3"><h1>Balance</h1></button>
            <h1>{Balance ? Balance : 0}</h1>
          </div>


        </div>

      </div>
      <div className="d-flex flex-wrap  justify-content-center text-center  m-4">
        <div className='px-3'>
          <input type="text" required value={inputVal} onChange={(e) => (setInputVal(e.target.value))} style={{ width: "500px", padding: "15px", }} className="form-control" placeholder="Enter Your Amount" aria-label="Username" aria-describedby="basic-addon1" />

        </div>

        <div className="dropdown ">
          <select className="btn btn-dark dropdown-toggle p-3 mx-3" type="button" /* data-bs-toggle="dropdown"*/ aria-expanded="false"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select </option>
            <option value="Cash In">Cash In</option>
            <option value="Cash Out">Cash Out</option>
          </select>
        </div>


        <div className="dropdown ">
          {category === "Cash In" &&

            <select className="btn btn-dark dropdown-toggle p-3  mx-3" type="button" /* data-bs-toggle="dropdown"*/ aria-expanded="false"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
              required
            >

              <option value="">Select Type</option>
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Investment">Investment</option>
              <option value="Loan">Loan</option>
            </select>
          }
          {category === "Cash Out" &&

            <select className="btn btn-dark dropdown-toggle p-3  mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
              required
            >

              <option value="">Select </option>
              <option value="Groceries">Groceries</option>
              <option value="Food/Drink">Food/Drink</option>
              <option value="Fuel">Fuel</option>
              <option value="Car/Bike">Car/Bike</option>
              <option value="Taxi">Taxi</option>
              <option value="Clothes">Clothes</option>
              <option value="Shopping">Shopping</option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills</option>

            </select>
          }




        </div>


      </div >

      <div className='text-center  m-4  '>
        <button type="button" style={{ width: "25%" }} className=" text-center btn btn-success p-3" onClick={addAmount}>Add Amount</button>
      </div>


      <div className='container'>
        <ul className="list-group ">
          {
            history.map((item, index) => {
              return <li className="list-group-item bg-light" key={index}><h2> Description : {item.categoryType}</h2> <h4>Amount : {item.amount} </h4> <h4>Category : {item.category} </h4><h4>Date : {item.date.toLocaleDateString()} </h4> <h4>Time : {item.date.toLocaleTimeString()
              } </h4>
              </li>
            })
          }
        </ul>

      </div>

    </>
  )
}

export default App