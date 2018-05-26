import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';


import { BandasPage } from '../pages/bandas/bandas';

import { ProjetosService } from '../providers/projetos-service';
import { TarefasService } from '../providers/tarefas-service';
import { BandasService } from '../providers/bandas-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaPlugin} from '@ionic-native/media';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    Filtro,

    BandasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    BandasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    TarefasService,
    BandasService,
    MediaPlugin, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
