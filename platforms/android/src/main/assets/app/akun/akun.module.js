"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var akun_routing_module_1 = require("./akun-routing.module");
var akun_component_1 = require("./akun.component");
var AkunModule = (function () {
    function AkunModule() {
    }
    return AkunModule;
}());
AkunModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            akun_routing_module_1.AkunRoutingModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            akun_component_1.AkunComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AkunModule);
exports.AkunModule = AkunModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWt1bi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJha3VuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUseURBQXVEO0FBQ3ZELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFlakQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxVQUFVO0lBYnRCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQix1Q0FBaUI7WUFDakIsNEJBQVk7U0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLDhCQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFVBQVUsQ0FBSTtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFrdW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYWt1bi1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBa3VuQ29tcG9uZW50IH0gZnJvbSBcIi4vYWt1bi5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFrdW5Sb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFrdW5Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWt1bk1vZHVsZSB7IH1cclxuIl19