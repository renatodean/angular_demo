import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '@app/core-module';
import { User } from '@app/shared-module/classes/user';
import { AlertComponent } from '@app/shared-module/components/alert-component/alert.component';
import { InputTextComponent } from '@app/shared-module/components/input-text-component/input-text.component';
import { InputPasswordComponent } from '@app/shared-module/components/input-password-component/input-password.component';
import { ButtonComponent } from '@app/shared-module/components/button-component/button.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { Routes } from '@angular/router';
import { AuthGuard, PublicGuard } from '@app/_guards';
import { Location } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';

const translations: any = {'CARDS_TITLE': 'This is a test'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

/**
 * Class to mock the auth service, similar in navbar.component.spec
 */
class MockAuthService {
  authenticated = false;
  loginFlag: boolean;

  isAuthenticated() {
    return this.authenticated;
  }

  login(user) {
    if (user.email === 'valid' && user.password === 'valid') {
      localStorage.setItem('currentUser', JSON.stringify({ username: user.email, token: 'fakeToken', id: '7' }));
      if (this.loginFlag) {
        return of({
          data: {
            token: 'fakeToken'
          },
          success: true
        });
      } else {
        return of({success: false});
      }
    } else {
      return of({token: null});
    }
  }
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent
  },
  {
    path: 'auth', component: LoginComponent
  },
  {
    path: 'home', component: LoginComponent
  }
];

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: MockAuthService;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    service = new MockAuthService();
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
        AlertComponent,
        InputTextComponent,
        InputPasswordComponent,
        ButtonComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        }),
      ],
      providers: [ {provide: AuthService, useValue: service } ]
    }).compileComponents();
    location = TestBed.get(Location);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service.loginFlag = true;
    fixture.detectChanges();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('currentUser');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login with valid credentials', () => {
    const user: User = new User('valid', 'valid');
    component.login(user);
    const success = `{"email":"valid","token":"fakeToken"}`;

    expect(localStorage.getItem('currentUser')).toEqual(success);
  });

  it('should fail login with invalid credentials', () => {
    const user: User = new User('invalid', 'invalid');
    component.login(user);
    expect(localStorage.getItem('currentUser')).toBe(null);
  });

  it('should change fields when showAlert()', () => {
    component.showAlert('approved', 'test response');
    expect(component.showAlertText).toBe('yes');
    expect(component.typeAlert).toBe('approved');
    expect(component.alertTextParam).toBe('test response');
  });

  it('should showAlert with error when user or password is missing', () => {
    const user: User = new User('', '');
    component.login(user);
    component.showAlert('error', 'missing login or password');
    expect(component.showAlertText).toBe('yes');
    expect(component.typeAlert).toBe('error');
    expect(component.alertTextParam).toBe('missing login or password');
  });

  it('navigates to home when invalid project', () => {
    const user: User = new User('valid', 'valid');
    const navigateSpy = spyOn(router, 'navigate');
    component.login(user);
    expect(navigateSpy).toHaveBeenCalledWith([ '/home' ]);
  });
});
