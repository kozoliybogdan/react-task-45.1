import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import "./index.css"

export default function App() {
  return (
    <div className="app">
      <h1>Task 45.1 — Redux Toolkit</h1>
      <p className="muted">
        Міграція глобального стану з Context на Redux (users + selected user).
      </p>

      <UserList />
      <UserProfile />
    </div>
  )
}