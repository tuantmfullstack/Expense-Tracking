import { Box, Flex, Select, Spinner, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseProvider';
import ExpenseChart from './ExpenseChart/ExpenseChart';
import ExpenseList from './ExpenseList/ExpenseList';

const ExpenseTracking = () => {
  const { status, expenseList, selectedYearHandler } =
    useContext(ExpenseContext);

  const selectedChangeHandler = (e) => {
    selectedYearHandler(e.target.value);
  };

  return (
    <Box
      bg='blackAlpha.700'
      color='#fff'
      p='12px 16px'
      marginTop='24px'
      borderRadius='20px'
    >
      <Flex justify='space-between' align='center' p='4px 12px'>
        <Text>Filter by year</Text>
        <Select
          width='100px'
          color='#000'
          bg='#fff'
          onChange={selectedChangeHandler}
        >
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </Select>
      </Flex>
      <ExpenseChart />
      {status === 'pending' && <Spinner />}
      <ExpenseList expenseList={expenseList} />
    </Box>
  );
};

export default ExpenseTracking;
