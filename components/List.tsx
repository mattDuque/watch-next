import Image from "next/image"
import React, { useState } from "react"
import { IoAddOutline } from "react-icons/io5"
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
        <li
          key={item.imdbID}
          className="flex py-1 px-3 border-indigo-500 hover:bg-slate-600 group cursor-pointer transition"
          onClick={() => console.log(item.imdbID)}
        >
          <Image src={item.Poster} alt={""} height={38} width={30} />
          <div className="pl-2">
            <p>{item.Title}</p>
            <p>{item.Year}</p>
          </div>
          <IoAddOutline className="ml-auto my-auto text-xl hidden group-hover:inline" />
        </li>
      ))}
    </ul>
  )
}

export default List
