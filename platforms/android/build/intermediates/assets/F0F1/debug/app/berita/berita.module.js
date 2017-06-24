"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var berita_routing_module_1 = require("./berita-routing.module");
var berita_component_1 = require("./berita.component");
var BeritaModule = (function () {
    function BeritaModule() {
    }
    return BeritaModule;
}());
BeritaModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            berita_routing_module_1.BeritaRoutingModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            berita_component_1.BeritaComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], BeritaModule);
exports.BeritaModule = BeritaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVyaXRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlcml0YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLHlEQUF1RDtBQUN2RCxpRUFBOEQ7QUFDOUQsdURBQXFEO0FBZXJELElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFieEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDJDQUFtQjtZQUNuQiw0QkFBWTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1Ysa0NBQWU7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IEJlcml0YVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9iZXJpdGEtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQmVyaXRhQ29tcG9uZW50IH0gZnJvbSBcIi4vYmVyaXRhLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQmVyaXRhUm91dGluZ01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBCZXJpdGFDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVyaXRhTW9kdWxlIHsgfVxyXG4iXX0=