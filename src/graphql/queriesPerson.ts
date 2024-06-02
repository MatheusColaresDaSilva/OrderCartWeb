import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query getPeople($page: Int, $size: Int) {
    getPeople(page: $page, size: $size) {
      content {
        content {
          ... on Person {
            name
            id
            sin
            birthDate
          }
        }
        totalElements
      }
    }
  }
`;

