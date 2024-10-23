import { useState } from 'react';
import styled from 'styled-components';

const DessertContainer = styled.div`
  text-align: center;
`

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
`

function Dessert() {
  const [inventory, setInventory] = useState(0);

  const plus = () => {
    setInventory(inventory + 1);
  }

  const minus = () => {
    if (inventory > 0) setInventory(inventory - 1);
  }

  return (
    <DessertContainer>
      <h2>Dessert</h2>
      <p>Current Inventory: {inventory}</p>
      <Button onClick={plus}>+</Button>
      <Button onClick={minus}>-</Button>
    </DessertContainer>
  )
}

export default Dessert;