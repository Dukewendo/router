import React from 'react'
import { useLocation } from 'react-router'


export default function Breadcrumbs() {

    const location = useLocation()

    console.log(location)
  return (
    <div>Breadcrumbs</div>
  )
}
