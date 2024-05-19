import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/item';

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     // You can add other headers like authorization token here
//   },
// });

// Define common API methods
// const _get = (url, config = {}) => {
//   return apiClient.get(url, config);
// };

// const _delete = (url, config = {}) => {
//   return apiClient.delete(url, config);
// };

// const _put = (url, data = {}, config = {}) => {
//   return apiClient.put(url, data, config);
// };

// const _post = (url, data = {}, config = {}) => {
//   return apiClient.post(url, data, config);
// };

type Product = {
  description: string;
};

async function createNewProduct(product: Product): Promise<Product | null> {
    return await axios.post(BASE_URL, product);
}

// Export API methods
const exportedObject = {
  createNewProduct
};

export default exportedObject;