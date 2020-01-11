import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tak } from './tak.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { OrdersModule } from '../../orders/orders.module';
import { Leiding } from './leiding.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksDataService {
  endpoint = 'tak';
  constructor(private httpClient: HttpClient) {}

  public takken(): Observable<Tak[]> {
    return this.httpClient
      .get<any[]>(`${environment.appUrl}/${this.endpoint}`)
      .pipe(
        map(res =>
          res.map(item => {
            const tak = new Tak();
            tak.name = item.naam;
            tak.id = item.id;
            tak.displayName = item.naam;
            tak.order = item.volgorde;
            return tak;
          })
        )
      );
  }

  leiding(takId: number): Observable<Leiding[]> {
    return this.httpClient
      .get<any[]>(`${environment.appUrl}/${this.endpoint}/${takId}/leiding`)
      .pipe(
        map(res =>
          res.map(item => {
            const leiding = new Leiding();
            leiding.id = item.id;
            leiding.firstName = item.voornaam;
            leiding.name = item.naam;
            leiding.displayName = `${item.voornaam} ${item.naam}`;
            leiding.abbreviation = item.afkorting;
            leiding.takId = item.takId;
            leiding.email = item.email;
            return leiding;
          })
        )
      );
  }
}
