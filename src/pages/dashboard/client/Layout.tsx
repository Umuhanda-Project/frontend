import { PropsWithChildren } from "react";
import { Sidebar, Header } from "./components";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex max-h-screen">
      <aside className="flex-shrink-0">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col overflow-y-scroll min-h-screen">
        <header className="flex-shrink-0">
          <Header />
        </header>

        <main className="flex-1 bg-[#F4F7FE] p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
