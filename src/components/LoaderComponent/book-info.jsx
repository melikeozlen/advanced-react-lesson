
const BookInfo = ({ book }) => {
    const { name, title } = book || {};
    return book ? (
        <p>
            Name: {name} Title: {title}
        </p>
    ) :
        <p>Loading...</p>
}

export default BookInfo