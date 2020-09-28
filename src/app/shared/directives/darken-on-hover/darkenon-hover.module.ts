import { NgModule } from '@angular/core';
import { DakenOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    declarations: [DakenOnHoverDirective],
    exports: [DakenOnHoverDirective]
})
export class DarkenOnHoverModule { }