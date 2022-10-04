import React from "react";
// import "./Menu.css";
import styled from "styled-components";

const MenuContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Heading = styled.h1`
  font-size: 20px;
  color: #555;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Images = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h2``;

const Button = styled.button`
  width: max-content;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 1px solid teal;
  color: teal;
  &:hover {
    border: 1px solid white;
    background-color: skyblue;
    color: black;
  }
`;

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <MenuContainer>
      <Heading>Other posts you may like</Heading>
      {posts.map((post) => {
        return (
          <PostsContainer key={post.id}>
            <Images src={post.img} alt="" />
            <Title>{post.title}</Title>
            <Button>Read More</Button>
          </PostsContainer>
        );
      })}
    </MenuContainer>
  );
};

export default Menu;
