// Icon Import
import SideBar from "./SideBar/SideBar";
import TaskList from "./TaskList";
import SearchAreaWithAvatarDropdown from "./SearchAreaWithAvatarDropdown";

export function Dashboard() {
  return (
    // Side Bar Todo List
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        {/* // Search bar with account avatar dropdown menu */}
        <SearchAreaWithAvatarDropdown />
        {/* // dispaly task items */}
        <TaskList />
      </div>
    </div>
  );
}
