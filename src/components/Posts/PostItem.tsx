import { FC } from 'react';
import styled, { css } from 'styled-components';
import { DocumentData } from 'firebase/firestore';

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  border: 1px solid #000000;
  color: #000000 !important;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  color: #000000;
`;

const Date = styled.h4`
  color: #000000;
`;

const Content = styled.h4`
  color: #000000;
`;

const Continue = styled.p`
  color: #000000;
`;

export const PostItem: FC<DocumentData> = ({ post }: DocumentData) => {
  return (
    <Wrapper>
      <Title>Title: {post.title}</Title>
      <Date>Date: {post.date}</Date>
      <Content>{post.content}</Content>
      <Continue>Continue reading...</Continue>
    </Wrapper>
  );
};
