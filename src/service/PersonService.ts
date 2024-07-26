import client from '../graphql/apolloClient';
import { GET_PEOPLE, CREATE_PERSON } from '../graphql/queriesPerson';

type Person = {
  id?: number;
  name: string;
  sinNumber: number;
  birthDate: Date;
};

async function createNewPerson(person: Person) {
  console.log('Person object being sent:', person)
  try {
    const { data } = await client.mutate({
      mutation: CREATE_PERSON,
      variables: { person },
    });

    console.log('Data returned:' ,data)
    return data;
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
  createNewPerson
};

export default exportedObject;