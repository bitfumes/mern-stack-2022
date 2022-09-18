import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";

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

      <Container>
        <TransactionForm fetchTransctions={fetchTransctions} />

        <TransactionsList
          transactions={transactions}
          fetchTransctions={fetchTransctions}
        />
      </Container>
    </div>
  );
}

export default App;
