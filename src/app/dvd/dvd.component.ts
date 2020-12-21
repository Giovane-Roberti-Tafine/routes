import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { DvdService } from '../services/dvd.service';

@Component({
    selector: 'app-dvd',
    templateUrl: './dvd.component.html',
    styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

    dvds$!: Observable<Dvd[]>;

    constructor(
        private devSerivce: DvdService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.dvds$ = this.devSerivce.dvds$;
    }

    goDetails(index: number, dvd: Dvd): void {
        this.router.navigate([`dvds/${index}`, { title: dvd.title }]);
    }

    removeDvd(index: number): void {
        this.devSerivce.removeDvd(index);
    }

}
