import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersStaticsComponent } from './folders-statics.component';

describe('FoldersStaticsComponent', () => {
  let component: FoldersStaticsComponent;
  let fixture: ComponentFixture<FoldersStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldersStaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoldersStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
