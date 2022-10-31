import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStaticsComponent } from './application-statics.component';

describe('ApplicationStaticsComponent', () => {
  let component: ApplicationStaticsComponent;
  let fixture: ComponentFixture<ApplicationStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationStaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
