import { memo } from "react"
import { useSelector } from "react-redux"
import { selectUsers } from "../redux/slices/usersSlice"
import UserListItem from "./UserListItem"

function UserList() {
    const users = useSelector(selectUsers)

    return (
        <div className="card">
            <h2>User list</h2>
            <ul className="list">
                {users.map((u) => (
                    <UserListItem key={u.id} userId={u.id} name={u.name} />
                ))}
            </ul>
        </div>
    )
}

export default memo(UserList)