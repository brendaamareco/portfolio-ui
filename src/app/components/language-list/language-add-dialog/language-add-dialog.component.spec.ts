import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAddDialogComponent } from './language-add-dialog.component';

describe('LanguageAddDialogComponent', () => {
  let component: LanguageAddDialogComponent;
  let fixture: ComponentFixture<LanguageAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
