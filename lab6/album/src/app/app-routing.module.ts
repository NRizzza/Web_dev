import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'photos', component:AlbumPhotosComponent},
  {path: 'albums', component:AlbumsComponent},
  {path: '**', component:NotFoundComponent}/* звездочки служат чтобы открыть экран нотфаунд если линк не существует*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
