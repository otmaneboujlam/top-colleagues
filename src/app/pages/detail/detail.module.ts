import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPage } from './detail.page';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    declarations: [
        DetailPage
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class DetailModule { }
