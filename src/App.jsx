import AppRouter from "./router";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

function App() {

  return (
    <>
      <Header>
      <h1>Welcome to Dessert</h1>
      </Header>
      <AppRouter />
    </>
  )
}

export default App;
