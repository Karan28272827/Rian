// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Adjust this import path as necessary
import { appConfig } from './app.config'; // Import appConfig for Angular's application configuration

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Declare your LoginComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule // Include FormsModule in the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // Optional: Here you could use the appConfig if needed
    appConfig.providers.forEach(provider => {
      // Optional: Include any provider-specific logic
    });
  }
}
