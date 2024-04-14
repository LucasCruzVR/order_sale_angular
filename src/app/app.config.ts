import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { routes } from './app.routes';
import { OrderService } from './services/order.service';
import { DatePipe } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    OrderService,
    DatePipe
  ]
};
