import React from 'react';
import { useAppSelector } from './redux/hooks';

import { Wrapper, Sidebar, Info, Plan, AddOns, Summary, Thanking } from './components';

import './App.scss';

export const App: React.FC = () => {
  const { page } = useAppSelector((state) => state.app);

  return (
    <Wrapper>
      <>
        <Sidebar />
        <main className="container">
          {page === 1 ? (
            <Info />
          ) : page === 2 ? (
            <Plan />
          ) : page === 3 ? (
            <AddOns />
          ) : page === 4 ? (
            <Summary />
          ) : page === 5 ? (
            <Thanking />
          ) : null}
        </main>
      </>
    </Wrapper>
  );
};
