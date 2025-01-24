import { PropsWithChildren } from "react";
import { Sidebar, Header } from "./components";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen min-w-screen">
      <div >
        <Sidebar />
      </div>
      <div className="flex-1">
        <div>
          <Header />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
