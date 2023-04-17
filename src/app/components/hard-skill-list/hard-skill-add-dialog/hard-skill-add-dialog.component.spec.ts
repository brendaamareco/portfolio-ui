import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillAddDialogComponent } from './hard-skill-add-dialog.component';

describe('HardSkillAddDialogComponent', () => {
  let component: HardSkillAddDialogComponent;
  let fixture: ComponentFixture<HardSkillAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
