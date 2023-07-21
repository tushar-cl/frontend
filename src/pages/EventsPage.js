
import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()
    if (data.isError) {
        return <p>{data.messgae}</p>
    }
    return (
        <>
            <EventsList events={data.events} />
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Response(JSON.stringify({messgae:"Could not fetch events."}) , {status:500,})
    } else {
        return response
    }
}