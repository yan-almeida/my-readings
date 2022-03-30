import { Book } from '@/modules/books/schemas/book.schema';
import { BookOutputType } from '@/modules/books/types/book-output.type';

export const booksTransform = (books: Book[]): BookOutputType[] => {
  return books.map((book) => ({
    id: book._id,
    name: book.name,
    description: book.description,
    author: book.author,
    status: book.status,
    createdAt: book.updatedAt,
    updatedAt: book.updatedAt,
  }));
};
