import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddComponent } from './experience-add.component';

describe('ExperienceAddComponent', () => {
  let component: ExperienceAddComponent;
  let fixture: ComponentFixture<ExperienceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
