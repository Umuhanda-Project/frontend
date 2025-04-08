import { ReactNode } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { ModalProvider } from '../providers/ModalProviders';
import { UserProvider } from '../context/userContext';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <UserProvider>
      <ModalProvider>
        <LanguageProvider>
          <div className="font-outfit">{children}</div>
        </LanguageProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default RootLayout;
