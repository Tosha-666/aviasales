
const initialState = {
  tickets: [],
  loading: true,
  all: true,
  without: true,
  withOne: true,
  withTwo: true,
  withThree: true,
  filterTab: "cheaper",
  error: false,
  errorIndicator: "",
  counter: 5,
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TICKETS_REQUEST":
      return {
        tickets: action.payload,
      };
    case "FETCH_TICKETS_SUCCESS":
      return {
        ...state,
        tickets: action.payload,
        error: false,
      };
    case "FETCH_TICKETS_FAILURE":
      return {
        ...state,
        error: true,
        errorIndicator: action.payload,
      };
    case "all":
      return state.all
        ? {
            ...state,
            all: false,
            without: false,
            withOne: false,
            withTwo: false,
            withThree: false,
            counter:5,
          }
        : {
            ...state,
            all: true,
            without: true,
            withOne: true,
            withTwo: true,
            withThree: true,
            counter:5,
          };
    case "without":
      if (state.without) {
        return { ...state, all: false, without: false, counter:5 };
      } else {
        if (state.withOne && state.withTwo && state.withThree)
          return { ...state, without: true, all: true, counter:5 };
        else return { ...state, without: true, counter:5 };
      }

    case "withOne":
      if (state.withOne) {
        return { ...state, all: false, withOne: false, counter:5 };
      } else {
        if (state.without && state.withTwo && state.withThree)
          return { ...state, withOne: true, all: true, counter:5 };
        else return { ...state, withOne: true, counter:5 };
      }
    case "withTwo":
      if (state.withTwo) {
        return { ...state, all: false, withTwo: false, counter:5 };
      } else {
        if (state.without && state.withOne && state.withThree)
          return { ...state, withTwo: true, all: true, counter:5 };
        else return { ...state, withTwo: true, counter:5 };
      }
    case "withThree":
      if (state.withThree) {
        return { ...state, all: false, withThree: false, counter:5 };
      } else {
        if (state.without && state.withOne && state.withTwo)
          return { ...state, withThree: true, all: true, counter:5 };
        else return { ...state, withThree: true, counter:5 };
      }
    case "changeFilter":
      return {
        ...state,
        filterTab: action.payload,
      };
    default:
      return state;

    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SHOW_MORE":
      return {
        ...state,
        counter: (state.counter += 5),
      };
  }
};
export { reduser };
