import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';
import { StartComponent } from './shared/start.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductDeatailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/NotFount.component';


//decorator
@NgModule({

    //all the module will be declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path:'product',component: ProductComponent},
            {path:'product/:id',component: ProductDeatailComponent},
            {path:'order',component: OrderComponent},
           {path:'home',component: HomeComponent},
           {path:'',redirectTo:'home',pathMatch:'full'},
           {path:'**',component: NotFoundComponent}

        
        ])
    ],

    // all the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        StartComponent,
        HomeComponent,
        OrderComponent,
        ProductDeatailComponent,
        NotFoundComponent
    ],

    //only first component
    bootstrap: [
        AppComponent
    ],

    //all services
    providers: [
        ProductService
    ]


})


export class AppModule{

}