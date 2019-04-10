import { Component, OnInit } from '@angular/core';

import { Album } from './albums/album.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'my-angular-albums';
    albumsArray: Album[];
    titleCounter = 1;
    numbers = [1, 2, 3];

    ngOnInit(): void {
        // const interval = setInterval(() => this.titleCounter++, 2000);
        const interval = setInterval(() => {
            this.titleCounter++;
            this.numbers.push(4);
            this.numbers = [...this.numbers];

            this.albumsArray[0].price += 10;

            console.log(this.numbers);
        }, 2000);
        setTimeout(() => clearInterval(interval), 6000);
    }
}
