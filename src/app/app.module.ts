import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {GetpostsService} from './services/getposts.service';
import { CrudinterfaceComponent } from './components/crudinterface/crudinterface.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    CrudinterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetpostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
