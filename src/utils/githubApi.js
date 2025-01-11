import axios from 'axios';

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching GitHub user:', error.message);
    throw new Error('Unable to fetch GitHub user data');
  }
};

export default fetchGitHubUser;
