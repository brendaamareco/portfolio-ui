import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageEditDialogComponent } from './language-edit-dialog.component';

describe('LanguageEditDialogComponent', () => {
  let component: LanguageEditDialogComponent;
  let fixture: ComponentFixture<LanguageEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
