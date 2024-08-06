import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"fir-web24k","appId":"1:11847626407:web:926b20cc62514bb785f582","storageBucket":"fir-web24k.appspot.com","apiKey":"AIzaSyCJNJBKJ4t6uLUcBbp8oDMHdRxuGSThcGA","authDomain":"fir-web24k.firebaseapp.com","messagingSenderId":"11847626407"})), provideAuth(() => getAuth())]
};
