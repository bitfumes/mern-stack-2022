import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransctions();
  }, []);

  async function fetchTransctions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    setTransactions(data);
  }

  return (
    <div>
      <AppBar />

      <TransactionForm fetchTransctions={fetchTransctions} />

      <br />

      <section>
        <table>
          <thead>
            <td>Amount</td>
            <td>Description</td>
            <td>Date</td>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
