import { NavLink, Outlet } from "react-router";

export function App() {
  return (
    <div className="min-h-screen font-sans text-zinc-900">
      <header className="border-b border-zinc-300">
        <div className="mx-auto flex max-w-3xl items-baseline justify-between gap-6 p-6">
          <p className="font-semibold">Labs</p>
          <nav className="flex gap-4 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "font-medium underline underline-offset-4"
                  : "text-zinc-600 hover:text-zinc-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/domain-score"
              className={({ isActive }) =>
                isActive
                  ? "font-medium underline underline-offset-4"
                  : "text-zinc-600 hover:text-zinc-900"
              }
            >
              Domain score
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
