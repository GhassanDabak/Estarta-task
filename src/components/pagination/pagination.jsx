import React from 'react'
import "./pagination.css"

function Pagination({employeesPerPage, totalEmployees, paginate}) {

    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {totalEmployees >10 ? <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul> : ""}
      
    </nav>
  )
}

export default Pagination