import { Box } from '@chakra-ui/react';
import ExpenseTracking from './components/ExpenseTracking/ExpenseTracking';
import ExpenseForm from './components/NewExpenses/ExpenseForm';

const App = () => {
  const expenseList = [
    { title: 'New PC', price: '90.00', date: new Date('2022/8/1') },
    { title: 'New PC', price: '90.00', date: new Date('2022/8/2') },
    { title: 'New PC', price: '90.00', date: new Date('2022/8/3') },
  ];

  return (
    <Box padding='36px 24px' width='700px' margin='0 auto'>
      <ExpenseForm expenseList={expenseList} />
      <ExpenseTracking />
    </Box>
  );
};

export default App;
