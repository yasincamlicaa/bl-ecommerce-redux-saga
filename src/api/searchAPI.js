const BASE_URL = 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview/';

export const searchAPI = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}search?name=${query}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to perform search');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
