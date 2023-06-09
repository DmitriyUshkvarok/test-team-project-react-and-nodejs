const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getIsRefreshing = (state) => state.auth.isRefreshing;

const getName = (state) => state.auth.user.name;

const getEmail = (state) => state.auth.user.email;

const selectToken = (state) => state.auth.token;

const getLocation = (state) => state.auth.location;

const getPhone = (state) => state.auth.phone;

const authSelector = {
  getIsLoggedIn,
  getIsRefreshing,
  getName,
  getEmail,
  getLocation,
  getPhone,
  selectToken,
};

export default authSelector;
