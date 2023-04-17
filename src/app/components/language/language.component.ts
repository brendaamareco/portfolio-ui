import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language, LanguageLevel } from 'src/app/models/language.interface';
import { LanguageEditDialogComponent } from './language-edit-dialog/language-edit-dialog.component';

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

  constructor(private dialog: MatDialog){}

  getLevelValue(): number {
    let levelValue = LanguageLevel[this.language.level] as unknown as number;
    return levelValue*20;
  }

  openEditDialog(): void 
  {
    this.dialog
    .open(LanguageEditDialogComponent, { data: this.language })
    .afterClosed()
    .subscribe( () => this.languageChanged.emit() );
  }
}
