import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { map, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DvdService {

    private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
    public dvds$ = this.dvdSubject$.asObservable();

    constructor() {
        timer(2000)
            .subscribe(() => {
                this.dvdSubject$.next([
                    { title: 'DVD - Oh yea', year: 2020, genre: 'Music' },
                    { title: 'The Computer', year: 2021, genre: 'Action' },
                ]);
            });
    }

    addDvd(dvd: Dvd) {
        let dvds = this.dvdSubject$.getValue();
        dvds.push(dvd);
    }

    removeDvd(index: number) {
        let dvds = this.dvdSubject$.getValue();
        if (index >= 0 && index < dvds.length) {
            dvds.splice(index, 1);
        }
    }

    getDvd(index: number): Observable<Dvd | null> {
        return this.dvdSubject$.pipe(
            map(dvd => (index >= 0 && index < dvd.length) ? dvd[index] : null),
            delay(1000)
        );
    }
}
