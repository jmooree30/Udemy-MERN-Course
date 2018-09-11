const initalState = {
  isAuthenticated: false,
  user: {},
  name: "Jacob"
};

export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
