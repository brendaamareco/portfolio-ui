import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillComponent } from './hard-skill.component';

describe('HardSkillComponent', () => {
  let component: HardSkillComponent;
  let fixture: ComponentFixture<HardSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
