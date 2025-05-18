import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {
    const loader: TranslateLoader = HttpLoaderFactory(this.http);
    loader.getTranslation('es').subscribe(translations => {
      this.translate.setTranslation('es', translations, true);
      this.translate.setDefaultLang('es');
      this.translate.use('es');
    });
  }

  title = 'SCIB - Prueba técnica';
}
