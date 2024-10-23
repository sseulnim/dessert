import styled from 'styled-components';

const DessertContainer = styled.div`
  text-align: center;
`

function Dessert() {
  return (
    <DessertContainer>
      <h2>Dessert</h2>
      <p>Current Inventory</p>
    </DessertContainer>
  )
}

export default Dessert;