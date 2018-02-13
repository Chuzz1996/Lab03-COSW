import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule}from '@angular/forms';

import {AppComponent }from './app.component';
import { FormsModule }   from '@angular/forms';
import{Component}from'@angular/core';
import { Observable } from 'rxjs/Observable';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import {UserEditPageComponent} from './pages/user-edit-page/user-edit-page.component';
import {UserListPageComponent} from './pages/user-list-page/user-list-page.component';
import { TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';

import {TodoService}from './services/todo.service';
import { UserService } from './services/users.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { AppConfiguration } from './common/config/app-configuration.service';
import { HttpModule } from '@angular/http';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';

const ROUTES = [
{ path: '', component: SignInPageComponent },
{path: 'home', component: HomePageComponent},
{path: 'tasks', component: TaskListPageComponent},
{path: 'edit', component: TaskEditPageComponent },
{path: 'editUser', component: UserEditPageComponent},
{path: 'users', component: UserListPageComponent},
{path: '**', component: PageNotFoundComponent}]

@NgModule({
  declarations: [
    SignInPageComponent,
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    PageNotFoundComponent,
    UserEditPageComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
	{provide: INITIAL_CONFIG,
       useValue: {
         apiURL: 'http://localhost:8080'
       }
      }, 
      TodoService,UserService,AppConfiguration,AuthService,AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
