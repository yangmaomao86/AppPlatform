import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { Page404Component } from './page404/page404.component';
import { Form01Component } from './form-01/form-01.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const appRoutes: Routes = [
  { path: 'hero-detail', component: HeroDetailComponent },
  { path: 'hero/:id',    component: HeroDetailComponent },
  { path: 'crisis-list',    component:CrisisListComponent },
  {
    path: 'hero-list',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'form-01', component: Form01Component },
  { path: '',
    redirectTo: '/hero-list',
    pathMatch: 'full'
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    Page404Component,
    Form01Component,
    CrisisListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



