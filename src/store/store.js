import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";
import signin_reducer from "./reducers/signin";
import activity_reducer from "./reducers/activities";

const store = configureStore({
    reducer: {
        cities: city_reducer,
        itineraries: itinerary_reducer,
        user: signin_reducer,
        activities: activity_reducer

    }
})


export default store