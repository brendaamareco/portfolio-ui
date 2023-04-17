import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language, LanguageLevel } from 'src/app/models/language.interface';

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

  getLevelValue(): number {
    let levelValue = LanguageLevel[this.language.level] as unknown as number;
    return levelValue*20;
  }
}
