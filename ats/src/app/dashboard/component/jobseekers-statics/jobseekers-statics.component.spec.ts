import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersStaticsComponent } from './jobseekers-statics.component';

describe('JobseekersStaticsComponent', () => {
  let component: JobseekersStaticsComponent;
  let fixture: ComponentFixture<JobseekersStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekersStaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekersStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
