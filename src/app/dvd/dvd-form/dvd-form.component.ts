import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
    }

}
