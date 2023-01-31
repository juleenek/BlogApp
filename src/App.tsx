import { FC } from 'react';
import { GlobalStyle } from './helpers/styles/global';
import { Layout } from './components/Layout';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout></Layout>
    </>
  );
};

export default App;
