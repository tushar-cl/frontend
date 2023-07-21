import React from 'react'
import EventForm from '../components/EventForm'

function NewEventPage() {
  return (
    <>
      <EventForm />
    </>
  )
}

export default NewEventPage

export async function action (request , params){
  console.log("uyygsdguasgdug" , request)
  const data  = await request.formData()

  console.log("Getting the formData",data)
  //   const eventData = {
  //   title: data.get('title'),
  //   image: data.get('image'),
  //   date: data.get('date'),
  //   description: data.get('description'),
  // }
  
  // const response = fetch('http://localhost:8080/events',{
  //   method:"POST",
  //   headers:{
  //     'Content-Type' : 'aplication/json'
  //   },
  //   body:JSON.stringify(eventData)
  // })

  // if(!response.ok){

  // }
  // else{
  //   // return response
  // }
}