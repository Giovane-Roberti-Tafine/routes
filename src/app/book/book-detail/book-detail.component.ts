import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book$!: Observable<Book | null>;
    index!: string;
    authors!: string[];

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Teste de console referente a mudanca do item recebido
        // console.log("index: ", this.route.snapshot.paramMap.get('index'));
        // this.route.paramMap
        //     .subscribe((params: ParamMap) => console.log('index:', params.get('index')));


        // Opcao 1
        // this.route.paramMap
        //     .subscribe((params: ParamMap) => {
        //         let index = params.get('index');
        //         if (index)
        //             this.book$ = this.bookService.getBook(parseInt(index));
        //     });

        // Opcao 2
        this.book$ = this.route.paramMap
            .pipe(
                tap((params: ParamMap) => {
                    this.index = params.get('index') ?? '';
                }),
                switchMap(() => this.bookService.getBook(parseInt(this.index))),
                tap((book) => this.authors = book?.authors ?? [])
            );
    }

    remove(): void {
        this.bookService.removeBook(parseInt(this.index));
        this.router.navigateByUrl('books');
    }

    goAuthors(): void {
        let url = '/books/' + this.index + '/authors';
        this.router.navigate([url, { authors: this.authors }]);
    }

}
