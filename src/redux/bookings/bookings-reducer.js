import BookingsTypes from "./bookings-types";

const initialState = [];
const BookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    /*case BookingsTypes.BOOKINGS_REQUEEST: {
             return state
         }*/
    case BookingsTypes.BOOKINGS_ACCEPT: {
      if (action.type === "BOOKINGS_ACCEPT") {
        return state + 1;
      }
      return state;
    }
    case BookingsTypes.BOOKINGS_PENDING: {
      return state;
    }
    case BookingsTypes.BOOKINGS_DENY: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default BookingsReducer;
