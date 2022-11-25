import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewFriendComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    SearchFriendComponent,
    ViewFriendComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
