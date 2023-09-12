import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import apiUrl from "../../apiUrl";

const read_activities_from_itineraries = createAsyncThunk(
    'read_activities_from_itineraries',
    async (obj) => {
        try {
            let data = await axios(apiUrl+`activities?itinerary_id=${obj.itinerary_id}`)
            return {
                activities_from_itineraries: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                activities_from_itineraries: []
            }


        }
    }
)

const activity_actions = { read_activities_from_itineraries }
export default activity_actions