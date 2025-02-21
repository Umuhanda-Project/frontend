import { ReactNode } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { ModalProvider } from '../providers/ModalProviders';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ModalProvider>
      <LanguageProvider>
        <div className="font-outfit">{children}</div>
      </LanguageProvider>
    </ModalProvider>
  );
};

export default RootLayout;
