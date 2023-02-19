import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillListComponent } from './soft-skill-list.component';

describe('SoftSkillListComponent', () => {
  let component: SoftSkillListComponent;
  let fixture: ComponentFixture<SoftSkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
