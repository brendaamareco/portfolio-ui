import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillListComponent } from './hard-skill-list.component';

describe('HardSkillListComponent', () => {
  let component: HardSkillListComponent;
  let fixture: ComponentFixture<HardSkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
