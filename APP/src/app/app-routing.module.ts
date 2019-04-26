import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    // canLoad: [CheckTutorial]
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'sign', loadChildren: './pages/sign/sign.module#SignPageModule' },
  { path: 'my', loadChildren: './pages/my/my.module#MyPageModule' },
  { path: 'course-information', loadChildren: './pages/course-information/course-information.module#CourseInformationPageModule' },
  { path: 'join-class', loadChildren: './pages/join-class/join-class.module#JoinClassPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
