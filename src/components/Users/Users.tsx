import React, { useState, useEffect } from 'react'
import UserButtonGroup from './UserButtonGroup'
import axios from 'axios'
import UserTable from './UserTable'
import UserSearch from './UserSearch'
import { UserRequest } from './@user-types'

const api = 'https://acme-users-api.herokuapp.com/api/users/'

interface userProps {
  index: string,
  searchTerm: string
}

const Users = ({ index, searchTerm }: userProps) => {
  const [users, setUsers] = useState<UserRequest>({ count: 1, users: [] })
  const search = searchTerm ? 'search/' + searchTerm + '/' : ''
  useEffect(() => {
    axios.get(`${api}${search}${index}`)
      .then(res => res.data)
      .then(newUsers => setUsers(newUsers))
      .catch(e => console.log(e))
  }, [index, searchTerm])

  const pageNum = Number(index) + 1
  const pageCount = Math.ceil(users.count / 50)

  return (
    <div>
      <div className={'margin-btm-lg'}>{users.count} results. Page {pageNum} of {pageCount}</div>
      <div className="margin-btm-lg">
        <UserButtonGroup pageNum={pageNum} lastPage={pageCount} search={search}/>
      </div>
      <div className="margin-btm-lg">
        <UserSearch searchTerm={searchTerm}/>
      </div>
      <UserTable users={users.users} searchTerm={searchTerm}/>
    </div>
  )
}

export default Users