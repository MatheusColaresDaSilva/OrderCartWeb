import client from '../graphql/apolloClient';
import { GET_PRODUCTS, CREATE_PRODUCT } from '../graphql/queries';

type Product = {
  id?: number;
  description: string;
};

async function createNewProduct(product: Product) {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_PRODUCT,
      variables: { description: product.description },
    });
    return data.getProducts;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function findAllProducts(page: number, size: number) {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
      variables: { page, size },
    });
    return data.getProducts.content;
  } catch (error) {
    console.error("Error fetching Products:", error);
    throw error;
  }
}


const exportedObject = {
  createNewProduct,
  findAllProducts
};

export default exportedObject;