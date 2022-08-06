import { Box, Text } from '@chakra-ui/react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenseList }) => {
  if (!expenseList.length) {
    return (
      <Box textAlign='center' justify='center' p='16px 0 8px'>
        <Text fontSize='18px' fontWeight='600'>
          No expense. Please add more!
        </Text>
      </Box>
    );
  }

  return (
    <>
      {expenseList.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </>
  );
};

export default ExpenseList;
