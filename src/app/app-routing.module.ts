import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {CrudinterfaceComponent} from './components/crudinterface/crudinterface.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts'},
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuardGuard] },
  { path: 'crud', component: CrudinterfaceComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
