import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";

export default function Home() {
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
  );
}
