const BASE_URL = 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview/';

export const addToCartAPI = async (id, sessionId, quantity, name, price) => {
  try {
    const response = await fetch(`${BASE_URL}add-to-cart?id=${id}&quantity=${quantity}&name=${encodeURIComponent(name)}&price=${price}`, {
      method: 'POST',
      headers: {
        'Session-ID': sessionId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    const data = await response.text();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
