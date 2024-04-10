import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InmemoryTestData } from './inmemory-test-data';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideHttpClient(withFetch()), provideRouter(routes), 
    importProvidersFrom(InMemoryWebApiModule.forRoot(InmemoryTestData, {delay: 2000}))
  ]
};
