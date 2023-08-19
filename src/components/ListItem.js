import styled from "styled-components"
import ItemImage from "./ItemImage"

const ListItem = ({item, handleAddToBasket}) => {

    return(
        <GridItem>
        <ItemImage item={item} alt="product" />
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>{item.desc}</p>
        <button value={item.id} onClick={handleAddToBasket}>Add To Basket</button>
        </GridItem>
    )
}

const GridItem = styled.li`
border: 1px solid #ffcab0;
border-radius: 10px;
padding: 2%;
color: #ffcab0;
`


export default ListItem