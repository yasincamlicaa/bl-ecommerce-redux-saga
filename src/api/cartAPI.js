const BASE_URL = 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview/';

export const fetchCartItems = async (sessionId) => {
  try {
    const response = await fetch(`${BASE_URL}view-cart`, {
      headers: {
        'Session-ID': sessionId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
