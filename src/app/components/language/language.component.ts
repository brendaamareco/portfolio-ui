import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language, LanguageLevel } from 'src/app/models/language.interface';
import { LanguageEditDialogComponent } from './language-edit-dialog/language-edit-dialog.component';
import { LanguageDeleteDialogComponent } from './language-delete-dialog/language-delete-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent 
{
  @Input() language: Language = { name: '', level: LanguageLevel.A1 };
  @Output() languageChanged = new EventEmitter<void>();
  levelValue: number = this.getLevelValue();

  constructor(private dialog: MatDialog, private authService: AuthService){}

  getLevelValue(): number 
  {
    let levelValue = LanguageLevel[this.language.level] as unknown as number;
    return levelValue*20;
  }

  openEditDialog(): void 
  { this.openDialog(LanguageEditDialogComponent); }

  openDeleteDialog(): void 
  { this.openDialog(LanguageDeleteDialogComponent); }

  openDialog(component: any): void 
  {
    this.dialog
    .open(component, { data: this.language })
    .afterClosed()
    .subscribe( () => this.languageChanged.emit() );
  }

  get isLogged(): boolean
  { return this.authService.loggedIn; }
}
