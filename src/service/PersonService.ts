import client from '../graphql/apolloClient';
import { GET_PEOPLE, CREATE_PERSON } from '../graphql/queriesPerson';

type Person = {
  id?: number;
  name: string;
  sin: string;
  birthDate: Date;
};

async function createNewProduct(person: Person) {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_PERSON,
      variables: { person: person },
    });
    return data.getProducts;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}


async function findAllPeople(page: number, size: number) {
  try {
    const { data } = await client.query({
      query: GET_PEOPLE,
      variables: { page, size },
    });
    console.log(data)
    return data.getPeople.content;
  } catch (error) {
    console.error("Error fetching persons:", error);
    throw error;
  }
}


const exportedObject = {
  findAllPeople,
  createNewProduct
};

export default exportedObject;