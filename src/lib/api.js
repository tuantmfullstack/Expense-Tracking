const FIREBASE_URL =
  'https://expense-tracking-a7a92-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const addNewExpense = async (newExpense) => {
  const res = await fetch(`${FIREBASE_URL}data.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newExpense),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
};

export const getAllExpenses = async () => {
  const res = await fetch(`${FIREBASE_URL}data.json`);
  const data = await res.json();
  if (!data) {
    return [];
  }
  return Object.values(data);
};
