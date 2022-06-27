import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        FormsModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        FormsModule,
        MatInputModule
    ]
})

export class AngularMaterialModule { }