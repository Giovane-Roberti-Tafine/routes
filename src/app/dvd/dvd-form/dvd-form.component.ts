import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
    selector: 'app-dvd-form',
    templateUrl: './dvd-form.component.html',
    styleUrls: ['./dvd-form.component.css']
})
export class DvdFormComponent implements OnInit {

    formDvd = this.fb.group({
        'title': [''],
        'year': [2019],
        'genre': ['']
    });
    constructor(
        private fb: FormBuilder,
        private dvdService: DvdService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.dvdService.addDvd(this.formDvd.value);
        this.router.navigate(['/dvds']);
    }

    goBack(): void {
        this.router.navigate(['/dvds']);
    }

}
