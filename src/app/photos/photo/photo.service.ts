import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const API: string = 'http://localhost:3000/'

@Injectable({ providedIn: 'root' })
export class PhotoService {

    /**
     * @param http HttpCliente
     */
    constructor(private http: HttpClient) {
        this.http = http;
    }

    /**
     * @param userName string
     */
    listFromUser(userName: string) {
        return this.http.get<Photo[]>(`${API}${userName}/photos`);
    }
}