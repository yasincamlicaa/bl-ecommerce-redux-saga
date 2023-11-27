const BASE_URL = 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview/';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}products`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
