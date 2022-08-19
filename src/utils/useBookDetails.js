import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useBookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.database.books);
  // eslint-disable-next-line eqeqeq
  const book = books.find((item) => item.id == id);

  return { book };
};

export default useBookDetails;
