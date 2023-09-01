import { useState } from "react"
import { useParams } from "react-router-dom"

const BlogDetails = () => {
    const params = useParams()
    const [slug] = useState(params.slug)
  return (
    <>{slug}</>
  )
}

export default BlogDetails