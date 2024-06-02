// SearchBar.js
import React from 'react';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({
  query,
  isSearchOpen,
  handleInputChange,
  handleKeyPress,
  handleSearchSubmit,
  handleCloseClick,
}) => {
  return (
    isSearchOpen && (
      <Box
        bg={mode(`cyan.300`, 'gray.900')}
        px='4'
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <IconButton
          icon={<CloseIcon />}
          size='sm'
          position='absolute'
          top='8px'
          right='8px'
          onClick={handleCloseClick}
          variant='ghost'
        />
        <Stack
          spacing='4'
          direction={{ base: 'row', sm: 'row' }}
          maxW='80%'
          w='50%'
        >
          <InputGroup>
            <Input
              variant='filled'
              placeholder='Search for phones...'
              value={query}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              required
            />
            <InputRightElement>
              <IconButton
                icon={<SearchIcon />}
                size='sm'
                onClick={handleSearchSubmit}
                variant='ghost'
              />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Box>
    )
  );
};

export default SearchBar;
