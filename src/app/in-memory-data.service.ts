import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Prod } from './prod';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService
    implements InMemoryDbService {
    createDb() {
        const main = [
            { id: 11, name: 'Android', price: "30$" },
            { id: 12, name: 'IPhone', price: "30000$" }
        ];
        return { main };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(main: Prod[]): number {
        return main.length > 0
            ? Math.max(...main.map((main) => main.id)) + 1
            : 11;
    }
}
