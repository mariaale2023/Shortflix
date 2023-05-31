const formatUser = (user) => {
  return {
    id: user._id,
    userName: user.userName,
    password: user.password,
  };
};

module.exports = formatUser;
