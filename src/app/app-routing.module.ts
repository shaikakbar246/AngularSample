import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CountriesDisplayComponent } from './countries-display/countries-display.component';
import { AddressTypesComponent } from './address-types/address-types.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  // {
  //     path: '',
  //     component: HomeComponent,
  //     canActivate: [AuthGuard]
  // },
  // {
  //     path: 'admin',
  //     component: AdminComponent,
  //     canActivate: [AuthGuard],
  //     data: { roles: [Role.Admin] }
  // },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'page',
    component: PageComponent
},
{
  path: 'test',
  component: TestComponent
},
  {
    path: 'countries',
    component: CountriesDisplayComponent
},
{
  path: 'add',
  component: AddressTypesComponent
},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }