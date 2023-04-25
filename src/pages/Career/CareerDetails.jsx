import React from 'react'
import { useLoaderData } from 'react-router'

export default function CareerDetails() {

const career = useLoaderData()
  return (
    <div className="career-details">
        <h1>Career Details for {career.title}</h1>
        <p>Salary: £{career.salary}</p>
        <p>Location: {career.location}</p>
        <div>
            <h2>Details</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nam molestias eos quia natus eum ex, modi recusandae. Sint numquam porro alias minima quos quisquam rerum illum? Dolorum, labore explicabo!
            </p>
        </div>
    </div>
  )
}


export const careerDetailsLoader = async ({ params }) => {
const { id } = params

const res = await fetch("http://localhost:4000/careers/" + id)

return res.json()
}