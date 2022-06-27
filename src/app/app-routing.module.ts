import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details/details.component';
import { UserComponent } from './pages/user/user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'userdetails/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
