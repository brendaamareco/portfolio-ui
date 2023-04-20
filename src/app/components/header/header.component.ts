import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderEditDialogComponent } from './header-edit-dialog/header-edit-dialog.component';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit 
{
  owner: Owner | undefined;

  constructor(private ownerService: OwnerService, public dialog: MatDialog) {}

  ngOnInit(): void { this.loadOwner(); }

  openEditDialog(): void 
  {
    this.dialog
    .open(HeaderEditDialogComponent, { data: this.owner, })
    .afterClosed()
    .subscribe( () => this.loadOwner() );
  }

  loadOwner(): void
  {
    this.ownerService
      .getAll()
      ?.subscribe((owners) => (this.owner = owners[0]));
  }
}