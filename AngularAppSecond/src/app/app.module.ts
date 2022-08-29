import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
