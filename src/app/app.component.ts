import {Component, OnInit} from '@angular/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    } 
    //fromCode = _('demo.text-in-code');
    useLanguage(language: string) {
        this.translate.use(language);
    }
}
