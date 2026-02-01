import { memo } from "react"
import { useSelector } from "react-redux"
import { selectSelectedUser } from "../redux/slices/usersSlice"

function UserProfile() {
    const user = useSelector(selectSelectedUser)

    return (
        <div className="card">
            <h2>User profile</h2>

            {user ? (
                <>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                </>
            ) : (
                <p>Користувач не вибраний</p>
            )}
        </div>
    )
}

export default memo(UserProfile)