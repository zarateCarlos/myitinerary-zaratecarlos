import { createReducer } from "@reduxjs/toolkit";
import activity_actions from "../actions/activities";
const { read_activities_from_itineraries } = activity_actions

const initial_state = {
    activities_from_itineraries: []
}

const activity_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_activities_from_itineraries.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                activities_from_itineraries: action.payload.activities_from_itineraries
            }
            return new_state
        }
    )
)
export default activity_reducer