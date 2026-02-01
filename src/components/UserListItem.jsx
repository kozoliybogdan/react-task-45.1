import { memo } from "react"
import { useSelector } from "react-redux"
import { selectSelectedUserId } from "../redux/slices/usersSlice"
import UserListItemButton from "./UserListItemButton"

function UserListItem({ userId, name }) {
    const selectedUserId = useSelector(selectSelectedUserId)
    const isActive = selectedUserId === userId

    return (
        <li className="list-item">
            <span className={isActive ? "active" : ""}>{name}</span>
            <UserListItemButton userId={userId} />
        </li>
    )
}

export default memo(UserListItem)