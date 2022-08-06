import { Box, Flex, Text } from '@chakra-ui/react';

const ExpenseMonth = ({ month, height }) => {
  return (
    <Flex direction='column' align='center'>
      <Box
        position='relative'
        height='100px'
        bg='blue.200'
        width='12px'
        borderRadius='20px'
        overflow='hidden'
      >
        <Box
          position='absolute'
          width='100%'
          bg='blue.500'
          bottom='0'
          right='0'
          height={height}
          transition='all 1s ease'
        ></Box>
      </Box>
      <Text color='#000' fontSize='14px'>
        {month}
      </Text>
    </Flex>
  );
};

export default ExpenseMonth;
