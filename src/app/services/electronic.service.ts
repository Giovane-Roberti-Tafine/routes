import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Electronic } from '../models/electronic';

@Injectable({
    providedIn: 'root'
})
export class ElectronicService {

    private electronicsSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
    public electronics$ = this.electronicsSubject$.asObservable();

    constructor() {
        timer(2000)
            .subscribe(() => {
                this.electronicsSubject$.next([
                    { name: 'HeadPhone', brand: 'Bose', price: 200, description: 'Noise cancelling' },
                    { name: 'Portable HD', brand: 'Samsung', price: 100, description: '2TB Hard disk' },
                    { name: 'Monitor 23\"', brand: 'AOC', price: 200, description: 'HDMI/VGA' },
                    { name: 'Processor i7-8700K', brand: 'Intel', price: 400, description: '12 MB Cache' },
                    { name: 'Mouse wireless', brand: 'Logitech', price: 50, description: 'For Gamers' }
                ]);
            });
    }

    getElectronic(index: number): Observable<Electronic | null> {
        return this.electronics$.pipe(
            map(electronics => (index >= 0 && index < electronics.length) ? electronics[index] : null),
            delay(3000)
        );
    }


}
