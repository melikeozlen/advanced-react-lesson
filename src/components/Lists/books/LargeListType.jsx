
export const LargeListBookType = ({ book }) => {
  const { name, title, price, pages } = book;
  return (
    <p> {name} - {title}
      <br />  <code> &emsp; Price: ${price} <br /> &emsp; Page: {pages} </code>
    </p>
  )
}
