import { ReactNode } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { ModalProvider } from '../providers/ModalProviders';
import { UserProvider } from '../context/userContext';
import { Outlet } from 'react-router-dom';

type RootLayoutProps = {
  children?: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <UserProvider>
      <ModalProvider>
        <LanguageProvider>
          <div className="font-outfit"> {children || <Outlet />}</div>
        </LanguageProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default RootLayout;
