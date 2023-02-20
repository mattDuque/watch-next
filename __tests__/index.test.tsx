import { render, screen } from "@testing-library/react"
import Home from "@/pages/index"
import List from "@/components/List"

const listData = [
  {
    Title: "The Godfather",
    Year: "1972",
    imdbID: "tt0068646",
    Type: "movie",
    Poster: "https://example.com/poster1.jpg",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",
    Type: "movie",
    Poster: "https://example.com/poster2.jpg",
  },
]

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("renders a search input", () => {
    render(<Home />)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument()
  })

  it("renders a list of items based on the input", () => {
    const inputText = "the"
    render(<List input={inputText} listData={listData} />)

    // Make sure the list is rendered
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()

    // Make sure the correct items are rendered
    const listItemElements = screen.getAllByRole("listitem")
    expect(listItemElements).toHaveLength(2)
    expect(listItemElements[0]).toHaveTextContent("The Godfather")
    expect(listItemElements[1]).toHaveTextContent("The Dark Knight")
  })

  it("renders nothing when the listData is null", () => {
    const inputText = "the"
    render(<List input={inputText} listData={null} />)

    // Make sure nothing is rendered
    const listElement = screen.queryByRole("list")
    expect(listElement).not.toBeInTheDocument()
  })
})
