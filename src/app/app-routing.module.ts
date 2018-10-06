import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{
    path:"",
    component: UsersComponent
},
{
    path:"posts",
    component: PostsComponent
},
{
    path:"details/:id",
    component: DetailsComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
