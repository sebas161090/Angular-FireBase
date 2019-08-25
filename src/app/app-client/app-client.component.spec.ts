/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppClientComponent } from './app-client.component';

describe('AppClientComponent', () => {
  let component: AppClientComponent;
  let fixture: ComponentFixture<AppClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
