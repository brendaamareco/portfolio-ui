import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class AbstractService<T> 
{
    baseUrl: string = environment.apiURL + "/api";
    url: string = '';

    constructor(protected httpClient: HttpClient, protected urlMapping: string) {
        this.url = this.baseUrl + urlMapping;
    }

    getAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.url);
    }

    add(model: T): Observable<T> {
        return this.httpClient.post<T>(this.url, model);
    }

    update(model: T): Observable<T> {
        return this.httpClient.put<T>(this.url, model);
    }

    delete(id: number | undefined): Observable<T> {
        return this.httpClient.delete<T>(this.url + '/' + id);
    }
}
