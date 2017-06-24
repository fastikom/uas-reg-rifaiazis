import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        NativeScriptModule,
        MainRoutingModule,
        SharedModule
    ],
    declarations: [
        MainComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule { }
