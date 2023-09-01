import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"

const read_carousel = createAsyncThunk(
    'read_carousel',
    async () => {
        try {
            let data = await axios(apiUrl + 'cities/carousel')
            return {
                carousel: data.data.data_carousel

            }

        } catch (error) {
            return{
                carousel: []
            }

        }

    }
)


const read_cities = createAsyncThunk(
    'read_cities',
    async (obj) => {
        try {
            let data = await axios(apiUrl+'cities?city='+obj.text)
            return {
                cities: data.data.response

            }

        } catch (error) {
            return{
                cities: []
            }

        }

    }
)


const read_cityDetail = createAsyncThunk(
    'read_cityDetail',
    async (obj) => {
        try {
            let data = await axios(apiUrl+'cities/'+obj.id)
            return {
                citydetail: data.data.response

            }

        } catch (error) {
            return{
                cityDetail: []
            }

        }

    }
)



const city_actions = { read_carousel, read_cities, read_cityDetail}
export default city_actions