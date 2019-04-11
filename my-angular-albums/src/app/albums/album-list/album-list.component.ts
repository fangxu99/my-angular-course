import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';
import { AlbumService } from '../shared/album.service';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    // albumsArray: Album[];
    albums: Observable<Album[]>;
    constructor(private albumService: AlbumService) {}

    ngOnInit() {
        this.getAlbums();
    }

    getAlbums() {
        this.albums = this.albumService.getAlbums();
    }

    parentFunctionHandler(album) {
        alert(
            `Album ${album.album_name} (id: ${
                album.id
            }) was sent from the album card component  `
        );
    }
}
