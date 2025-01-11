const fetchGitHubUser = async (username) => {
  const token = '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'
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default fetchGitHubUser;
