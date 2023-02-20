declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

export interface Response {
  Search: Search[]
  totalResults: string
  Response: string
  Error?: string
}

export interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}