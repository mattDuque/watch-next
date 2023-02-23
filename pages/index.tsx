import Head from "next/head"
import Image from "next/image"
import debounce from "lodash.debounce"
import styles from "@/pages/index.module.css"
import List from "@/components/List"
import { useState } from "react"
import { Response, Search } from "types"

export default function Home() {
  const [inputText, setInputText] = useState("")
  const [listData, setListData] = useState<Search[] | string | null>(null)

  // Debounced function that calls the API
  const handleAPICall = debounce(value => {
    // If input is empty, clear the list
    if (value.length > 0) {
      setInputText(value)
      // Call OMDb API
      fetch(`http://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
        .then(res => res.json())
        .then((data: Response) => {
          if (data.Response === "True") {
            setListData(data.Search)
          } else {
            setListData(data.Error!)
          }
        })
    } else {
      setListData(null)
    }
  }, 1500) // Wait for x milliseconds before making the API call

  let inputHandler = (e: { target: { value: string } }) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    handleAPICall(lowerCase)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="justify-center xl:w-full py-2 border rounded-md shadow-sm outline-none focus-within:ring-indigo-500 focus-within:border-indigo-500 block sm:text-sm">
          <input
            onChange={inputHandler}
            type="text"
            className="w-full outline-none my-1 px-3 focus:bg-transparent"
            id="search"
            placeholder="Search"
          />
          <List input={inputText} listData={listData} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
