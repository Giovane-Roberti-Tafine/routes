import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';
import { ElectronicService } from 'src/app/services/electronic.service';

@Component({
    selector: 'app-electronic-detail',
    templateUrl: './electronic-detail.component.html',
    styleUrls: ['./electronic-detail.component.css']
})
export class ElectronicDetailComponent implements OnInit {

    electronic$!: Observable<Electronic | null>;

    constructor(
        private electronicService: ElectronicService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        let index = this.route.snapshot.paramMap.get('index');
        if (index) this.electronic$ = this.electronicService.getElectronic(+index);
    }

    back(): void {
        this.router.navigate(['..'], { relativeTo: this.route });
    }

}
