import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouseComponent } from './carouse/carouse.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductService} from "./shared/product.service";
import { FilterPipe } from './pipe/filter.pipe';
import {HttpClientModule} from '@angular/common/http';

const routeConfig:Routes=[
  {path:'',component:HomeComponent},
/*  {path:'product/:prodTitle',component:ProductDetailsComponent},
  {path:'product/:prodPrice',component:ProductDetailsComponent},*/
  {path:'product/:productId',component:ProductDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouseComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailsComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
