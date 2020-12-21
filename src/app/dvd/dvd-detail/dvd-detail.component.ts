import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
    selector: 'app-dvd-detail',
    templateUrl: './dvd-detail.component.html',
    styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

    dvd$!: Observable<Dvd | null>;
    title: string = '';

    constructor(
        private route: ActivatedRoute,
        private dvdService: DvdService,
        private router: Router
    ) { }

    ngOnInit(): void {
        let index = this.route.snapshot.paramMap.get('index');
        if (index)
            this.dvd$ = this.dvdService.getDvd(parseInt(index));
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.title = params.get('title') ?? '';
            });
        // console.log("Index: ", this.route.snapshot.paramMap.get('index'));
        // this.route.paramMap
        //     .subscribe((params: ParamMap) => console.log("index: ", params.get('index')));
    }

    goBack(): void {
        this.router.navigate(['/dvds']);
    }

}
