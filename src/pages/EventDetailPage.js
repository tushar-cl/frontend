import React from 'react'
import {  useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'


function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');
    console.log("=>>>>>>>>>>",data)
    return (
        <>
            <EventItem event={data.event}/>
        </>
    )
}

export default EventDetailPage

export async function loader ({request, params}){
    const id = params.id
    const response = await fetch('http://localhost:8080/events/'+id)
    if (!response.ok) {
        throw new Response(JSON.stringify({messgae:"Could not fetch events by the id."}) , {status:500})
    } else {
        return response
    }
}