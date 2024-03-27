import { Component, OnInit } from '@angular/core';
import { PotionService } from '../../service/potion.service';
import { Potion } from '../../models/potion';

@Component({
    templateUrl: './potions.component.html',
})
export class PotionsComponent implements OnInit {

    constructor(private potionService: PotionService) {

    }

    ngOnInit() {
        //Lets fetch the potions from our API
        this.potionService.getPotions().subscribe( potions => {
            this.Potions = [...potions];
            console.log(this.Potions);
        });
    }

    Potions: Potion[] = [];
}
