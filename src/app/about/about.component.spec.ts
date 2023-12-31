import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MockComponent } from 'ng-mocks';
import { ContactFormComponent } from '../contact-form/contact-form.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(AboutComponent, {
        remove: { imports: [ContactFormComponent] },
        add: { imports: [MockComponent(ContactFormComponent)] }
      });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
