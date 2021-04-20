import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '', loadChildren: () => import('./tebs/tebs.module').then(m => m.TebsPageModule) },
  { path: 'teb1', loadChildren: () => import('./teb1/teb1.module').then(m => m.Teb1PageModule) },
  { path: 'teb2', loadChildren: () => import('./teb2/teb2.module').then(m => m.Teb2PageModule) },
  { path: 'teb3', loadChildren: () => import('./teb3/teb3.module').then(m => m.Teb3PageModule) },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-company',
    loadChildren: () => import('./auth/register-company/register-company.module').then( m => m.RegisterCompanyPageModule)
  },
  {
    path: 'register-individual',
    loadChildren: () => import('./auth/register-individual/register-individual.module').then( m => m.RegisterIndividualPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
