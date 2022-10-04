// import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const HomeWrapper = styled.div`
  width: 1024px;
`;

const Posts = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

const Post = styled.div`
  gap: 100px;
  display: flex;
  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: lightgreen;
    position: absolute;
    top: 20px;
    left: -20px;
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const Header = styled.h1`
  font-size: 48px;
  color: black;
`;

const Para = styled.p`
  font-size: 18px;
`;
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

const Home = () => {
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
    <HomeContainer>
      <HomeWrapper>
        <Navbar />
        <Posts>
          {posts.map((post) => {
            return (
              <Post key={post.id}>
                <ImageContainer>
                  <Image src={post.img} alt="" />
                </ImageContainer>
                <ContentContainer>
                  <Link to={`/post/${post.id}`}>
                    <Header>{post.title}</Header>
                  </Link>
                  <Para>{post.desc}</Para>
                  <Button>Read More</Button>
                </ContentContainer>
              </Post>
            );
          })}
        </Posts>
        <Footer />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
