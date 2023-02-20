import React, { useState } from "react"
import { Search } from "types"

function List(props: { input: string; listData: Search[] | string | null }) {
  if (!props.listData) {
    return null
  }

  if (typeof props.listData === "string") {
    return (
      <ul>
        <li>{props.listData}</li>
      </ul>
    )
  }

  const filteredData = props.listData.filter(el => {
    if (props.input === "") {
      return el
    } else {
      return el.Title.toLowerCase().includes(props.input)
    }
  })
  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.imdbID}>{item.Title}</li>
      ))}
    </ul>
  )
}

export default List
