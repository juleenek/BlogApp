import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { stackColor } from '../../helpers/styles/colors';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { firestore } from '../../utils/firebase.config';
import { PostItem } from './PostItem';

const Wrapper = styled.div`
  width: 90%;
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
      {blogItems.map((blogItem: DocumentData) => {
        return <PostItem key={blogItem.id} post={blogItem} />;
      })}
    </Wrapper>
  );
};
