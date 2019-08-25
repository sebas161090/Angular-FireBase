/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppClientListComponent } from './app-client-list.component';

describe('AppClientListComponent', () => {
  let component: AppClientListComponent;
  let fixture: ComponentFixture<AppClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
