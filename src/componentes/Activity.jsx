import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import apiUrl from '../apiUrl';
import '../css/activity.css'
//import activity_actions from '../store/actions/activities';

//const { read_activities_from_itineraries } = activity_actions;

const Activity = ({ itineraryId }) => {

    const [activity, setActivity] = useState([])

    //const activity = useSelector(store => store.activities.activities_from_itineraries);
    // const dispatch = useDispatch();

    useEffect(() => {
        // Realiza la solicitud de actividades utilizando el itinerary_id
        //dispatch(read_activities_from_itineraries({ itinerary_id: itineraryId }));

        axios(apiUrl + 'activities?itinerary_id=' + itineraryId)
            .then(res => setActivity(res.data.response))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='contenedor' >
            {activity.length === 0 ? (
                <div className="noItinerary">
                    <p>THERE ARE NO ACTIVITIES YET FOR THIS CITY!</p>
                    <img src="https://media.tenor.com/p8riXqjS-ycAAAAC/feel-sad.gif" alt="not activities" />
                </div>


            ) : (activity.map((item, index) =>

                <div className='activityConteiner' key={item._id}>

                    <img src={item.photo} alt={item.name} />
                    <p> {item.name} </p>

                </div>
            ))

            }
        </div>
    );
};

export default Activity;
