import { PropsWithChildren, useEffect} from 'react';
import { Sidebar, Header } from './components';
import toast, { Toaster } from 'react-hot-toast';
import { useConnection } from '../../../hooks/useConnection';

const Layout = ({ children }: PropsWithChildren) => {
  const status = useConnection();

  useEffect(() => {
    if (!status) toast.error('You are disconnected from internet');
    // else
    // toast.success("You are connected to internet")
  }, [status]);

  return (
    <div className="flex max-h-screen">
      <aside className="flex-shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col overflow-y-scroll min-h-screen">
        <header className="flex-shrink-0">
          <Header />
        </header>
        <Toaster />
        <main className="flex-1 bg-[#F4F7FE] p-6 ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
