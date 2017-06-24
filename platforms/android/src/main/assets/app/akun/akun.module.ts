import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { AkunRoutingModule } from "./akun-routing.module";
import { AkunComponent } from "./akun.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AkunRoutingModule,
        SharedModule
    ],
    declarations: [
        AkunComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AkunModule { }
