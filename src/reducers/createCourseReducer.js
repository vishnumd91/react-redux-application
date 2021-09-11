const createCourseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default createCourseReducer;
