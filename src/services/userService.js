import User from '../models/user.js';
import fetchGitHubUser from '../utils/githubApi.js';

const saveUser = async (username) => {
  console.log("saveuse",username)
  const existingUser = await User.findOne({ username:username });
  if (existingUser) return existingUser;

  const data = await fetchGitHubUser(username);
  console.log(data)
  const newUser = new User({
    username: data.login,
    name: data.name,
    avatar_url:data.avatar_url,
    bio: data.bio,
    blog: data.blog,
    location: data.location,
    public_repos: data.public_repos,
    public_gists: data.public_gists,
    followers: data.followers,
    following: data.following,
    created_at: data.created_at,
    updated_at: data.updated_at,
  });

  return newUser.save();
};

const searchUsers = async (query) => {
  return User.find({...query})
};

const softDeleteUser = async (username) => {
  return User.findOneAndUpdate(
    { username },
    { is_deleted: true },
    { new: true }
  );
};

const updateUser = async (username, updates) => {
  return User.findOneAndUpdate(
    { username, is_deleted: false },
    updates,
    { new: true }
  );
};

const listUsers = async (sortField) => {
  const sortQuery = { [sortField]: 1 };
  return User.find({ is_deleted: false }).sort(sortQuery);
};

export {
  saveUser,
  searchUsers,
  softDeleteUser,
  updateUser,
  listUsers,
};
