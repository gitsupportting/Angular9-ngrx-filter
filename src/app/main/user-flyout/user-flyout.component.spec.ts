import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { UserFlyoutComponent } from './user-flyout.component';

describe('UserFlyoutComponent', () => {
  // let httpClient:HttpClient;
  // let httpTestingController:HttpTestingController;
  let component: UserFlyoutComponent;
  let fixture: ComponentFixture<UserFlyoutComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ UserFlyoutComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    // httpClient = TestBed.get(HttpClient);
    // httpTestingController = TestBed.get(HttpTestingController);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
