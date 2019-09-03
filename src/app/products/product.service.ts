import {Injectable} from '@angular/core';
import { Iproduct } from './product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class ProductService{
constructor(private http: HttpClient){

}
private url='https://ngapi4.herokuapp.com/api/getProducts';

getProduct():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.url);
}
}

