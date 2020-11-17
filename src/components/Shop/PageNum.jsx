import React from "react"
import Pagination from "react-bootstrap/Pagination"

function PageNum({ postPerPage, totalPost, changePage }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push[i]
  }

  return (
    <div>
      {pageNumbers.map(item => (
        <Pagination onClick={() => changePage(item)}>
          <Pagination.Item key={item}>{item}</Pagination.Item>
        </Pagination>
      ))}
    </div>
  )
}

export default PageNum
