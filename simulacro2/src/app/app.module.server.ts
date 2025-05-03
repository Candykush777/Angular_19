import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [AppModule, ServerModule,CommonModule],
  providers: [provideServerRouting(serverRoutes)],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
