import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProducts($page: Int, $size: Int) {
    getProducts(page: $page, size: $size) {
      content {
        content {
          ... on Product {
            id
            description
          }
        }
        totalElements
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProducts($id: ID!) {
    getProducts(id: $id) {
      id
      description
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($description: String!) {
    createProduct(description: $description) {
      id
      description
    }
  }
`;
