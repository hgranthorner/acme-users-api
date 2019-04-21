import React from 'react'
import { Link } from 'react-router-dom'

interface UBGProps {
  pageNum: number,
  lastPage: number,
  search: string
}

const UserButtonGroup = ({ pageNum, lastPage, search }: UBGProps) => {
  return (
    <div className={'btn-group'} role={'group'}>
      <Link className={`btn btn-info ${pageNum === 1 ? 'disabled' : null}`}
            to={`/users/${search}0`}>
        First
      </Link>
      <Link className={`btn btn-info ${pageNum === 1 ? 'disabled' : null}`}
            to={`/users/${search}${pageNum - 2}`}>
        Prev
      </Link>
      <button className="btn btn-primary">
        {pageNum}
      </button>
      <Link className={`btn btn-info ${pageNum === lastPage ? 'disabled' : null}`}
            to={`/users/${search}${pageNum}`}>
        Next
      </Link>
      <Link className={`btn btn-info ${pageNum === lastPage ? 'disabled' : null}`}
            to={`/users/${search}${lastPage - 1}`}>
        Last
      </Link>
    </div>
  )
}

export default UserButtonGroup