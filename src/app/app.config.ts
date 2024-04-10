import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InmemoryTestData } from './inmemory-test-data';
import { ProductService } from './prod.service';

export const appConfig: ApplicationConfig = {
  providers: [ProductService, provideClientHydration(), provideHttpClient(withFetch()), provideRouter(routes), 
    importProvidersFrom(InMemoryWebApiModule.forRoot(InmemoryTestData, {delay: 2000}))
  ]
};
