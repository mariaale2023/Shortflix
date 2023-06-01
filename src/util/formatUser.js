const formatUser = (user) => {
  if (!user) {
    return null; //
  }
  return {
    id: user.id,
    userName: user.userName,
    password: user.password,
  };
};

module.exports = formatUser;
