import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDeleteDialogComponent } from './language-delete-dialog.component';

describe('LanguageDeleteDialogComponent', () => {
  let component: LanguageDeleteDialogComponent;
  let fixture: ComponentFixture<LanguageDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
