
const SmallListAuthorType = ({ author }) => {
  const { name, country } = author;
  return (
    <p>Name: {name}, Country: {country}  </p>
  )
}

export default SmallListAuthorType