import React from "react"
//import Pagination from "react-bootstrap/Pagination"

function PageNum({ postPerPage, totalPost, changePage }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => changePage(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNum
