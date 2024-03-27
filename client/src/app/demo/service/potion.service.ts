import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Potion } from '../models/potion';

@Injectable()
export class PotionService {

    constructor(private http: HttpClient) { }

    getPotions() {
        return this.http.get<Potion[]>('http://localhost:3001/api/potions');
    }
}
