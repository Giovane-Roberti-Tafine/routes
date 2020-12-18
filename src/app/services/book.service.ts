import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private bookSubjects$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
    public books$ = this.bookSubjects$.asObservable();

    constructor() {
        timer(2000)
            .subscribe(() => {
                this.bookSubjects$.next([
                    { title: 'Book 1', pages: 200, authors: ['john'] },
                    { title: 'Book 2', pages: 400, authors: ['john', 'mary'] },
                    { title: 'Book 3', pages: 300, authors: ['john'] },
                    { title: 'Book 4', pages: 100, authors: ['john', 'Ya'] },
                ]);
            });

    }

    addBook(book: Book) {
        let books = this.bookSubjects$.getValue();
        books.push(book);
    }

    removeBook(index: number) {
        let books = this.bookSubjects$.getValue();
        if (index >= 0 && index < books.length) {
            books.splice(index, 1);
        }
    }

    getBook(index: number): Observable<Book | null> {
        return this.books$.pipe(
            map(book => (index >= 0 && index < book.length) ? book[index] : null),
            delay(1000)
        );
    }
}
