import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { BeritaRoutingModule } from "./berita-routing.module";
import { BeritaComponent } from "./berita.component";

@NgModule({
    imports: [
        NativeScriptModule,
        BeritaRoutingModule,
        SharedModule
    ],
    declarations: [
        BeritaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BeritaModule { }
