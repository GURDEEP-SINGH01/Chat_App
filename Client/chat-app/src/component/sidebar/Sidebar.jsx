import { Friends } from "./Friends"
import { Logout } from "./Logout"
import SearchInput from "./SearchInput"

export const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <SearchInput />
      <div className="divider px-3 mt-1" />
      <Friends />
      <Logout />
    </div>
  )
}
