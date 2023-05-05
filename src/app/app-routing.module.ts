import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { FriendprofComponent } from './friendprof/friendprof.component';
import { FriendsComponent } from './friends/friends.component';
import { MureComponent } from './mure/mure.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mure', component: MureComponent },
  { path: 'friend/:id/:ownerid', component:FriendprofComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
