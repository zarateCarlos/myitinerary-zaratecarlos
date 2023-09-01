import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";


const store = configureStore({
    reducer: {
        cities: city_reducer,
        itineraries: itinerary_reducer,

    }
})


export default store