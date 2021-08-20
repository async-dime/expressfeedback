import React from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';

const Feedback = ({ author, text, createdAt }) => (
  <Box h="full" w="full">
    <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="medium">
      {author}
    </Heading>
    <Text color="gray.500" mb={4} fontSize="xs">
      {format(parseISO(createdAt), 'PPpp')}
    </Text>
    <Text color="gray.800">{text}</Text>
    <Divider borderColor="gray.200" backgroundColor="gray.200" mt={8} mb={8} />
  </Box>
);

export default Feedback;
