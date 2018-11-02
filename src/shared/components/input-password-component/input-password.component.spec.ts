import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordComponent } from './input-password.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { of } from 'rxjs/observable/of';

const translations: any = {'CARDS_TITLE': 'This is a test'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('InputPasswordComponent', () => {
  let component: InputPasswordComponent;
  let fixture: ComponentFixture<InputPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        })
      ],
      declarations: [ InputPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update and emit value of input', () => {
    component.update('newVal');
    fixture.detectChanges();
    expect(component.valueInput).toBe('newVal');
    component.valueInputChange.subscribe(g => {
      expect(g).toEqual('newVal');
    });
  });
});
