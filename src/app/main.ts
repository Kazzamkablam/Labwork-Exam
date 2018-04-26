import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { AngularFireAuth } from 'angularfire2/auth';

platformBrowserDynamic().bootstrapModule(AppModule);
