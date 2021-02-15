import BookingsTypes from './bookings-types';


export const BookingsAccept = () => ({
    type: BookingsTypes.BOOKINGS_ACCEPT,
    payload: "somthin"
});
console.log(BookingsAccept)

export const BookingsPending = () => ({
    type: BookingsTypes.BOOKINGS_PENDING,
});

export const BookingsDeni = () => ({
    type: BookingsTypes.BOOKINGS_DENY,
});

export const BookingsSuccess = () => ({
    type: BookingsTypes.BOOKINGS_SUCCESS,
});