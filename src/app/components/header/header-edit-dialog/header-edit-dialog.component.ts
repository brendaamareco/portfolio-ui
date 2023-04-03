import { Component, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-header-edit-dialog',
  templateUrl: './header-edit-dialog.component.html',
  styleUrls: ['./header-edit-dialog.component.scss']
})
export class HeaderEditDialogComponent 
{
  ownerForm: FormGroup = new FormGroup({});

  constructor( public dialogRef: MatDialogRef<HeaderEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public owner: Owner, private formBuilder: FormBuilder, private ownerService: OwnerService) 
  {
    this.ownerForm = this.formBuilder.group(
      {
        thumbnail: [owner.thumbnail],
        welcomeText: [owner.welcomeText],
        role: [owner.role, Validators.required]
      }
    )
  }

  submit(): void
  {
    this.owner.thumbnail = this.ownerForm.get("thumbnail")?.value;
    this.owner.welcomeText = this.ownerForm.get("welcomeText")?.value;
    this.owner.role = this.ownerForm.get("role")?.value;

    this.ownerService.update(this.owner).subscribe( response => {});
    this.dialogRef.close();
  }

  get role()
  {
    return this.ownerForm.get("role");
  }
}
