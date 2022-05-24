const initialState =JSON.parse(localStorage.getItem("single")) || {
  bio: "",
  company: "",
  followers: 0,
  profile_img: "",
  userHandle: "",
  userName: "",
  __v: 0,
  _id: "",
};

export const UserReducer = (state = initialState, action) => {
  // console.log("inside dispatch ", action)
  if (action.type === "USER"){
    state=action.payload;
    return state
  }
  else return state;
};
