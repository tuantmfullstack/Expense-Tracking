import { Flex } from '@chakra-ui/react';
import ExpenseMonth from './ExpenseMonth';
import { useContext } from 'react';
import { ExpenseContext } from '../../../context/ExpenseProvider';

const ExpenseChart = () => {
  const { expenseList } = useContext(ExpenseContext);
  const months = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 0 },
    { month: 'Mar', value: 0 },
    { month: 'Apr', value: 0 },
    { month: 'May', value: 0 },
    { month: 'Jun', value: 0 },
    { month: 'Jul', value: 0 },
    { month: 'Aug', value: 0 },
    { month: 'Sep', value: 0 },
    { month: 'Oct', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dec', value: 0 },
  ];

  let total = 0;

  expenseList.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    months[month].value += expense.price;
    total += expense.price;
  });

  return (
    <Flex
      justify='space-around'
      borderRadius='12px'
      bg='red.100'
      p='12px'
      marginTop='12px'
    >
      {months.map((month, idx) => (
        <ExpenseMonth
          key={idx}
          month={month.month}
          height={Math.round((month.value / total) * 100) + 'px'}
        />
      ))}
    </Flex>
  );
};

export default ExpenseChart;
