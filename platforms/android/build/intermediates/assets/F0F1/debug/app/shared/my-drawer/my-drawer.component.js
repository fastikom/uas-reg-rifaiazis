"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = (function () {
    function MyDrawerComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    /* ***********************************************************
    * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
    * The navigationItems property is initialized here and is data bound to <ListView> in the MyDrawer view file.
    * Add, remove or edit navigationItems to change what is displayed in the app drawer list.
    *************************************************************/
    MyDrawerComponent.prototype.ngOnInit = function () {
        this._navigationItems = [
            {
                title: "Home",
                route: "/home",
                icon: "\uf015"
            },
            {
                title: "Browse",
                route: "/browse",
                icon: "\uf1ea"
            },
            {
                title: "Berita",
                route: "/berita",
                icon: "\uf1ea"
            },
            {
                title: "Search",
                route: "/search",
                icon: "\uf002"
            },
            {
                title: "Featured",
                route: "/featured",
                icon: "\uf005"
            },
            {
                title: "Settings",
                route: "/settings",
                icon: "\uf013"
            }
        ];
    };
    Object.defineProperty(MyDrawerComponent.prototype, "navigationItems", {
        get: function () {
            return this._navigationItems;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * Use the "itemTap" event handler of the <ListView> component for handling list item taps.
    * The "itemTap" event handler of the app drawer <ListView> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    MyDrawerComponent.prototype.onNavigationItemTap = function (args) {
        var navigationItemView = args.view;
        var navigationItemRoute = navigationItemView.bindingContext.route;
        this.routerExtensions.navigate([navigationItemRoute], {
            transition: {
                name: "slide"
            }
        });
    };
    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <ListView>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    return MyDrawerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyDrawerComponent.prototype, "selectedPage", void 0);
MyDrawerComponent = __decorate([
    core_1.Component({
        selector: "MyDrawer",
        moduleId: module.id,
        templateUrl: "./my-drawer.component.html",
        styleUrls: ["./my-drawer.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], MyDrawerComponent);
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQStEO0FBRy9EOzs7OERBRzhEO0FBTzlELElBQWEsaUJBQWlCO0lBVTFCLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV0RCxDQUFDO0lBRUQ7Ozs7a0VBSThEO0lBQzlELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDcEI7Z0JBQ0ksS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLFFBQVE7YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLFFBQVE7YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLFFBQVE7YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxRQUFRO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsUUFBUTthQUNqQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsc0JBQUksOENBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQ7Ozs7a0VBSThEO0lBQzlELCtDQUFtQixHQUFuQixVQUFvQixJQUFtQjtRQUNuQyxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBRXBFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ2xELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTzthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsMENBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBbEZELElBa0ZDO0FBNUVZO0lBQVIsWUFBSyxFQUFFOzt1REFBc0I7QUFOckIsaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUMzQyxDQUFDO3FDQVd3Qyx5QkFBZ0I7R0FWN0MsaUJBQWlCLENBa0Y3QjtBQWxGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBLZWVwIGRhdGEgdGhhdCBpcyBkaXNwbGF5ZWQgaW4geW91ciBhcHAgZHJhd2VyIGluIHRoZSBNeURyYXdlciBjb21wb25lbnQgY2xhc3MuXHJcbiogQWRkIG5ldyBkYXRhIG9iamVjdHMgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IGluIHRoZSBkcmF3ZXIgaGVyZSBpbiB0aGUgZm9ybSBvZiBwcm9wZXJ0aWVzLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVGhlIFwic2VsZWN0ZWRQYWdlXCIgaXMgYSBjb21wb25lbnQgaW5wdXQgcHJvcGVydHkuXHJcbiAgICAqIEl0IGlzIHVzZWQgdG8gcGFzcyB0aGUgY3VycmVudCBwYWdlIHRpdGxlIGZyb20gdGhlIGNvbnRhaW5pbmcgcGFnZSBjb21wb25lbnQuXHJcbiAgICAqIFlvdSBjYW4gY2hlY2sgaG93IGl0IGlzIHVzZWQgaW4gdGhlIFwiaXNQYWdlU2VsZWN0ZWRcIiBmdW5jdGlvbiBiZWxvdy5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZFBhZ2U6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uSXRlbXM6IEFycmF5PGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgTXlEcmF3ZXJDb21wb25lbnQgXCJvbkluaXRcIiBldmVudCBoYW5kbGVyIHRvIGluaXRpYWxpemUgdGhlIHByb3BlcnRpZXMgZGF0YSB2YWx1ZXMuXHJcbiAgICAqIFRoZSBuYXZpZ2F0aW9uSXRlbXMgcHJvcGVydHkgaXMgaW5pdGlhbGl6ZWQgaGVyZSBhbmQgaXMgZGF0YSBib3VuZCB0byA8TGlzdFZpZXc+IGluIHRoZSBNeURyYXdlciB2aWV3IGZpbGUuXHJcbiAgICAqIEFkZCwgcmVtb3ZlIG9yIGVkaXQgbmF2aWdhdGlvbkl0ZW1zIHRvIGNoYW5nZSB3aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgYXBwIGRyYXdlciBsaXN0LlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25JdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwiL2hvbWVcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAxNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJyb3dzZVwiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwiL2Jyb3dzZVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcXHVmMWVhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQmVyaXRhXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvYmVyaXRhXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYxZWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcIi9zZWFyY2hcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAwMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZlYXR1cmVkXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvZmVhdHVyZWRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAwNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNldHRpbmdzXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvc2V0dGluZ3NcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAxM1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYXZpZ2F0aW9uSXRlbXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb25JdGVtcztcclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIFwiaXRlbVRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIDxMaXN0Vmlldz4gY29tcG9uZW50IGZvciBoYW5kbGluZyBsaXN0IGl0ZW0gdGFwcy5cclxuICAgICogVGhlIFwiaXRlbVRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIGFwcCBkcmF3ZXIgPExpc3RWaWV3PiBpcyB1c2VkIHRvIG5hdmlnYXRlIHRoZSBhcHBcclxuICAgICogYmFzZWQgb24gdGhlIHRhcHBlZCBuYXZpZ2F0aW9uSXRlbSdzIHJvdXRlLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtVmlldyA9IGFyZ3MudmlldztcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbVJvdXRlID0gbmF2aWdhdGlvbkl0ZW1WaWV3LmJpbmRpbmdDb250ZXh0LnJvdXRlO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdmlnYXRpb25JdGVtUm91dGVdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVGhlIFwiaXNQYWdlU2VsZWN0ZWRcIiBmdW5jdGlvbiBpcyBib3VuZCB0byBldmVyeSBuYXZpZ2F0aW9uIGl0ZW0gb24gdGhlIDxMaXN0Vmlldz4uXHJcbiAgICAqIEl0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGl0ZW0gc2hvdWxkIGhhdmUgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcy5cclxuICAgICogVGhlIFwic2VsZWN0ZWRcIiBjbGFzcyBjaGFuZ2VzIHRoZSBzdHlsZXMgb2YgdGhlIGl0ZW0sIHNvIHRoYXQgeW91IGtub3cgd2hpY2ggcGFnZSB5b3UgYXJlIG9uLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGlzUGFnZVNlbGVjdGVkKHBhZ2VUaXRsZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VUaXRsZSA9PT0gdGhpcy5zZWxlY3RlZFBhZ2U7XHJcbiAgICB9XHJcbn1cclxuIl19