import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayCounter() {
    const counter = useSelector((store) => store.counter)
  return (
    <div>counter current value {counter} </div>
  )
}
