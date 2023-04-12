import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutEditDialogComponent } from './about-edit-dialog/about-edit-dialog.component';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  owner: Owner | undefined;
  
  constructor(private ownerService: OwnerService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.ownerService.get().subscribe(
      owners => { this.owner = owners[0]; }
    )
  }

  openEditDialog() 
  {
    this.dialog.open(AboutEditDialogComponent, { data: this.owner })
  }

}
