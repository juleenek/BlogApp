import { FC, useState, useEffect } from 'react';
import { GlobalStyle } from './helpers/styles/global';
import { Layout } from './components/Layout';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { firestore } from './utils/firebase.config';

interface StateBlogItem {
  title: string;
  date: number;
}

export const App: FC = () => {
  const [blogItems, setBlogItems] = useState<DocumentData>([]);
  const blogItemsCollectionRef = collection(firestore, 'blogItems');

  useEffect(() => {
    const getBlogItems = async () => {
      const data = await getDocs(blogItemsCollectionRef);
      setBlogItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogItems();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Layout></Layout>
    </>
  );
};

export default App;
