import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsStaticsComponent } from './jobs-statics.component';

describe('JobsStaticsComponent', () => {
  let component: JobsStaticsComponent;
  let fixture: ComponentFixture<JobsStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsStaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
