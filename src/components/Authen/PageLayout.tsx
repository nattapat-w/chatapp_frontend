import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex pt-12 flex-col h-full lg:flex lg:h-full lg:pt-12 lg:flex-row bg-light-secondary dark:bg-dark-primary">
      <div className="flex w-full h-full justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
