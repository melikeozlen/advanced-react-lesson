
const LargeListAuthorType = ({ author }) => {
  const { name, books, age } = author;
  return (
    <div> {name} - {age}
      <ul>
        {books.map((item, index)=>(<li key={index}> {item} </li>))}
      </ul>
    </div>
  )
}

export default LargeListAuthorType