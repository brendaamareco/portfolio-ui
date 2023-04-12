import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractService<T> {
    rootUrl: string = '';

    constructor(protected httpClient: HttpClient, protected url: string) {
        this.rootUrl = url;
    }

    getAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.rootUrl);
    }

    add(model: T): Observable<T> {
        return this.httpClient.post<T>(this.rootUrl, model);
    }

    update(model: T): Observable<T> {
        return this.httpClient.put<T>(this.rootUrl, model);
    }

    delete(id: number | undefined): Observable<T> {
        return this.httpClient.delete<T>(this.rootUrl + '/' + id);
    }
}
