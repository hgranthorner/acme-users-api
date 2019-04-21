import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface USProps {
  searchTerm: string
}

const UserSearch = ({ searchTerm = '' }: USProps) => {
  const [search, setSearch] = useState(searchTerm)

  return (
    <div className={'input-group'}>
      <input placeholder="Search Results" className="form-control"
             value={search}
             onChange={(evt) => setSearch(evt.target.value)}
      />
      <div className="input-group-append">
        <Link to={`/users/search/${search}/0`} className={`btn btn-primary ${search ? null : 'disabled'}`}>
          Go
        </Link>
        <Link to={`/users/0`} className={`btn btn-info ${searchTerm ? null : 'disabled'}`}
          onClick={() => setSearch('')}
        >
          Clear
        </Link>
      </div>
    </div>
  )
}

export default UserSearch