import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { Observable } from "rxjs";
import { Order } from "../entities/order/order";
import { environment } from "../../environment";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
    constructor(
        private http: HttpClient,
        private datePipe: DatePipe
    ) {}

    getAllOrders(): Observable<any[]> {
        const period = new HttpParams().set("startDate", this.datePipe.transform(Date.now(), "yyyy-MM-dd") || "")
                                    .set("endDate", this.datePipe.transform(Date.now(), "yyyy-MM-dd") || "");
        return this.http.get<any[]>(`${environment.baseApi}/orders`, {params: period});
    }
}