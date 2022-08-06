import {
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../../context/ExpenseProvider';
import useHttp from '../../hook/useHttp';
import { addNewExpense } from '../../lib/api';
import { v4 } from 'uuid';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('1');
  const [date, setDate] = useState('2019-01-01');
  const { addNewExpenseHandler } = useContext(ExpenseContext);
  const { status, error, sendRequest } = useHttp(addNewExpense);
  const toast = useToast();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const newExpenseClickHandler = () => {
    const newExpense = {
      title,
      price: +price,
      date,
      id: v4(),
    };
    sendRequest(newExpense);
    addNewExpenseHandler(newExpense);

    setDate('2019-01-01');
    setTitle('');
    setPrice(1);
  };

  const toastHandler = ({ title, status }) => {
    toast({
      title,
      status,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  useEffect(() => {
    if (status === 'success') {
      toastHandler({ title: 'Expense created!', status });
    } else if (status === 'error') {
      toastHandler({ title: error, status });
    }
  }, [status]);

  return (
    <FormControl bg='green.300' color='#fff' p='16px' borderRadius='20px'>
      <Flex gap='16px'>
        <Box flex='1'>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input id='title' onChange={titleChangeHandler} value={title}></Input>
        </Box>
        <Box flex='1'>
          <FormLabel htmlFor='price'>Price</FormLabel>
          <Input
            type='number'
            id='price'
            value={price}
            min='1'
            step='0.01'
            onChange={priceChangeHandler}
          ></Input>
        </Box>
        <Box flex='1'>
          <FormLabel htmlFor='price'>Date</FormLabel>
          <Input
            id='Date'
            type='date'
            onChange={dateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
            value={date}
          ></Input>
        </Box>
      </Flex>
      <Flex justify='flex-end'>
        <Button
          colorScheme='blue'
          marginTop='16px'
          onClick={newExpenseClickHandler}
          isLoading={status === 'pending'}
          loadingText='Sending...'
        >
          Add New Expense
        </Button>
      </Flex>
    </FormControl>
  );
};

export default ExpenseForm;
