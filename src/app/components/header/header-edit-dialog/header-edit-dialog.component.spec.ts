import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEditDialogComponent } from './header-edit-dialog.component';

describe('HeaderEditDialogComponent', () => {
  let component: HeaderEditDialogComponent;
  let fixture: ComponentFixture<HeaderEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
