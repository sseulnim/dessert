import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
`;

function Home() {
  return (
    <HomeContainer>
      <h2>메인</h2>
      <p>welcome to the home page!</p>
    </HomeContainer>
  )
}

export default Home;