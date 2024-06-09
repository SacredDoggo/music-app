import { UserOptions } from "./sidebar-components/user-options";
import { UserLibrary } from "./sidebar-components/user-library";
import { MusicLanguageSelector } from "./sidebar-components/music-language-selector";
import { NavMenu } from "./sidebar-components/nav-menu";

export const Sidebar = () => {
  return (
    <>
      <aside className="left space-y-2 p-2 w-[420px] relative flex flex-col overflow-y-auto">
        <UserOptions />
        <NavMenu />
        <MusicLanguageSelector />
        <div className="flex-1">
          <UserLibrary />
        </div>
      </aside>
      <div className="h-full w-0.5 bg-primary/5 dark:bg-secondary" />
    </>
  );
}