import React, { useState } from "react"
import CatalogueItem from "../../data/CatalogueItem"
import Catalogue from "./Catalogue"
import PageNum from "./PageNum"

const data = CatalogueItem

function App() {
  const [posts] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(6)

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  function switchPage(item) {
    setCurrentPage(item)
  }

  return (
    <div>
      <Catalogue dataPosts={currentPosts} />
      <PageNum
        postPerPage={postPerPage}
        totalPost={posts.length}
        changePage={switchPage}
      />
    </div>
  )
}

export default App
