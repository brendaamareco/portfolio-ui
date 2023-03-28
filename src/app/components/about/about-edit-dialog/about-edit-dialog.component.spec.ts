import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEditDialogComponent } from './about-edit-dialog.component';

describe('AboutEditDialogComponent', () => {
  let component: AboutEditDialogComponent;
  let fixture: ComponentFixture<AboutEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
