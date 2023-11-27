const BASE_URL = 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview/'; 

export const createSessionApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}createsession`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to create session');
    }

    const data = await response.text();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

