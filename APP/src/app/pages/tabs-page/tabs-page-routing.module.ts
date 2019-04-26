import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'course-information',
        children: [
          {
            path: '',
            loadChildren: '../course-information/course-information.module#CourseInformationPageModule'
          }
        ]
      },
      // {
      //   path: 'schedule',
      //   children: [
      //     {
      //       path: '',
      //       component: SchedulePage,
      //     },
      //     {
      //       path: 'session/:sessionId',
      //       loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
      //     }
      //   ]
      // },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: '../speaker-list/speaker-list.module#SpeakerListModule'
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: '../speaker-detail/speaker-detail.module#SpeakerDetailModule'
          }
        ]
      },
      {
        path: 'my',
        children: [
          {
            path: '',
            loadChildren: '../my/my.module#MyPageModule'
          }
        ]
      },
      // {
      //   path: 'map',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../map/map.module#MapModule'
      //     }
      //   ]
      // },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/course-information',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

