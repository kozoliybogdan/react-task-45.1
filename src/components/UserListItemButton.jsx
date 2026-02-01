import { memo } from "react"
import { useDispatch } from "react-redux"
import { selectUser } from "../redux/slices/usersSlice"

function UserListItemButton({ userId }) {
    const dispatch = useDispatch()

    return (
        <button type="button" onClick={() => dispatch(selectUser(userId))}>
            Select
        </button>
    )
}

export default memo(UserListItemButton)