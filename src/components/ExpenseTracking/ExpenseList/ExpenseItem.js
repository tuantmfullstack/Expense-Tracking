import { Flex, Text } from '@chakra-ui/react';

const ExpenseItem = ({ title, price, date }) => {
  const time = new Date(date);
  const day = `0${time.getDate()}`.slice(-2);
  const month = time.toLocaleString('en-US', { month: 'long' });
  const year = time.getFullYear();
  return (
    <Flex
      bg='gray.500'
      color='#fff'
      marginTop='12px'
      borderRadius='12px'
      p='8px'
      gap='16px'
      justify='space-between'
      align='center'
    >
      <Flex
        bg='blackAlpha.400'
        direction='column'
        p='4px 0'
        width='80px'
        borderRadius='inherit'
        justify='center'
        align='center'
      >
        <Text fontWeight='600' fontSize='14px'>
          {month}
        </Text>
        <Text fontSize='14px'>{year}</Text>
        <Text fontSize='22px' fontWeight='700'>
          {day}
        </Text>
      </Flex>
      <Text fontSize='28px' fontWeight='700' flex='1'>
        {title}
      </Text>
      <Text
        p='4px 12px'
        bg='pink.500'
        borderRadius='8px'
        border='1px solid #ccc'
        boxShadow='0 0 4px #ccc'
      >
        ${price}
      </Text>
    </Flex>
  );
};

export default ExpenseItem;
