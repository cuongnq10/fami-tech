import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Wrap,
  WrapItem,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Button,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import ProductCard from '../components/ProductCard';
import { searchProducts } from '../redux/actions/productActions';

const SearchResultsScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, error, products, pagination } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    dispatch(searchProducts(1, query));
  }, [dispatch, location.search]);

  const paginationButtonClick = (page) => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    dispatch(searchProducts(page, query));
  };

  return (
    <Box mx={{ base: '12', md: '20', lg: '32' }} my='8'>
      {error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <>
          <Text fontSize='2xl' mb='4'>
            Results found for "{new URLSearchParams(location.search).get('q')}"
          </Text>
          <Wrap spacing='30px' justify='center' minHeight='80vh'>
            {products.map((product) => (
              <WrapItem key={product._id}>
                <Center w='250px' h='450px'>
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
          {products.length ? (
            <Wrap spacing='10px' justify='center' p='5'>
              <Button
                colorScheme='cyan'
                onClick={() => paginationButtonClick(1)}
              >
                <ArrowLeftIcon />
              </Button>
              {Array.from(Array(pagination.totalPages), (e, i) => {
                return (
                  <Button
                    colorScheme={
                      pagination.currentPage === i + 1 ? 'cyan' : 'gray'
                    }
                    key={i}
                    onClick={() => paginationButtonClick(i + 1)}
                  >
                    {i + 1}
                  </Button>
                );
              })}
              <Button
                colorScheme='cyan'
                onClick={() => paginationButtonClick(pagination.totalPages)}
              >
                <ArrowRightIcon />
              </Button>
            </Wrap>
          ) : (
            ''
          )}
        </>
      )}
    </Box>
  );
};

export default SearchResultsScreen;
