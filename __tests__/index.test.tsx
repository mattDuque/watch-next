import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("renders a search input", () => {
    render(<Home />)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument()
  })

  it("renders a list", () => {
    render(<Home />)

    const list = screen.getByRole("list")

    expect(list).toBeInTheDocument()
  })
})
