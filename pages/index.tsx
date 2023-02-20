import Head from "next/head"
import Image from "next/image"
import debounce from "lodash.debounce"
import styles from "@/pages/index.module.css"
import List from "@/components/List"
import { useState } from "react"

export default function Home() {
  const [inputText, setInputText] = useState("")

  // Debounced function that calls the API
  const handleAPICall = debounce(value => {
    setInputText(value)

    // Call your API here using the input value
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

        <div className="search">
          <input type="text" onChange={inputHandler} />
          <List input={inputText} />
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
