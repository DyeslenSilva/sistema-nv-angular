import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
@NgModule({
    declarations:[]
  ,imports: [HttpClientModule],providers:[]
  ,bootstrap:[]})
export class HeroService {

      readonly apiUrl : string;

  constructor(private http: HttpClient) {
      this.apiUrl = 'http://localhost:3000'
   }

  ngOnInit(){
    
  }


}
