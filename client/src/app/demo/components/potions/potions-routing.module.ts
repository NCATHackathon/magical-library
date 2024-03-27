import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PotionsComponent } from './potions.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PotionsComponent }
    ])],
    exports: [RouterModule]
})
export class PotionsRoutingModule { }
