import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { stackColor } from '../../helpers/_variables';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { firestore } from '../../utils/firebase.config';
import { PostItem } from './PostItem';
import { TopPostItem } from './TopPostItem';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${css`
    background-color: ${stackColor.white};
  `}
`;

export const PostsList: FC = () => {
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
    <Wrapper>
      {blogItems.map((blogItem: DocumentData, index: number) => {
        if (index === 0)
          return <TopPostItem key={blogItem.id} post={blogItem} />;
        return <PostItem key={blogItem.id} post={blogItem} />;
      })}
    </Wrapper>
  );
};
