import { createContext, useEffect, useState } from 'react';
import useHttp from '../hook/useHttp';
import { getAllExpenses } from '../lib/api';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState('2019');
  const [expenseListFull, setExpenseListFull] = useState([]);
  const { status, data, sendRequest } = useHttp(getAllExpenses, true);

  const selectedYearHandler = (value) => {
    setSelectedYear(value);
  };

  useEffect(() => {
    setExpenseListFull(data);
  }, [data]);

  const expenseList = expenseListFull.filter((expense) => {
    const year = new Date(expense.date).getFullYear().toString();
    return year === selectedYear;
  });

  useEffect(() => {
    sendRequest();
  }, []);

  const addNewExpenseHandler = (newExpense) => {
    setExpenseListFull((preVal) => [...preVal, newExpense]);
  };

  const value = {
    status,
    expenseList,
    addNewExpenseHandler,
    selectedYearHandler,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
