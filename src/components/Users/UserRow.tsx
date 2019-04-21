import React from 'react'
import { User } from './@user-types'

interface URProps {
  user: User,
  searchTerm: string
}

const UserRow = ({ user: { firstName, middleName, lastName, email, title }, searchTerm }: URProps) => {
  return (
    <tr>
      <td scope={'row'}>{firstName}</td>
      <td>{middleName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{title}</td>
    </tr>
  )
}

export default UserRow