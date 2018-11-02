import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { AuthService } from '@app/core-module';
import { NavbarComponent } from '@app/shared-module/components/navbar-component/navbar.component';
import { TranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProjectService } from '@app/feature-modules/project/service/project.service';

const translations: any = {'CARDS_TITLE': 'This is a test'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const authServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'},
    getUserId() {
      return 1;
    }
  };

  const projectServiceStub = {
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, NavbarComponent ],
      imports: [ RouterTestingModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        })
      ],
      providers: [
        {provide: AuthService, useValue: authServiceStub },
        TranslateService,
        {provide: ProjectService, useValue: projectServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
