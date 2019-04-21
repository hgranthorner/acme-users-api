import React from 'react'
import { User } from './@user-types'
import UserRow from './UserRow'

interface UTProps {
  users: Array<User>,
  searchTerm: string
}

const UserTable = ({ users, searchTerm }: UTProps) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Middle</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map((user, ix) => <UserRow key={ix} user={user} searchTerm={searchTerm}/>)
        }
        </tbody>
      </table>
    </div>
  )
}

export default UserTable