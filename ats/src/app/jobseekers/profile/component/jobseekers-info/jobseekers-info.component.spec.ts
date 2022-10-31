import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersInfoComponent } from './jobseekers-info.component';

describe('JobseekersInfoComponent', () => {
  let component: JobseekersInfoComponent;
  let fixture: ComponentFixture<JobseekersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekersInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
