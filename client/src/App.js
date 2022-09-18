import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

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

      <Container>
        <TransactionForm
          fetchTransctions={fetchTransctions}
          editTransaction={editTransaction}
        />

        <TransactionsList
          transactions={transactions}
          fetchTransctions={fetchTransctions}
          setEditTransaction={setEditTransaction}
        />
      </Container>
    </div>
  );
}

export default App;
