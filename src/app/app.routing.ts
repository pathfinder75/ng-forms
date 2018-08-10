import { Routes } from "@angular/router/src/config";
import { LoginComponent } from "./modules/login/login.component";
import { TableComponent } from "app/table/table.component";
import { HeroComponent } from "app/hero/hero.component";
import { NameEditorComponent } from "app/name-editor/name-editor.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    }
]