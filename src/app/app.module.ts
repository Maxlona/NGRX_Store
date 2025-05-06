import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store';
import { TodoEffects } from '../store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoService } from '../store/service';
import { todoReducer } from '../store/reducer'
import { environment } from '../app/environment';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
    }),

  ],
  providers: [Store, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
