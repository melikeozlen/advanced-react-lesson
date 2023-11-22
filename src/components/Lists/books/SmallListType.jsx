
export const SmallListBookType = ({ book }) => {
  const { name, title } = book;
  return (
    <p>
      Name: {name} Title: {title}
    </p>
  )
}
