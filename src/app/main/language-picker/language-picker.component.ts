import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { sortBy } from 'lodash';

import { Languages } from 'src/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.less']
})
export class LanguagePickerComponent implements OnInit {

  @Input() selectedLanguage = 'en';
  @Output() languageChanged = new EventEmitter<string>();

  languages = [];

  constructor(private userService:UserService) {}

  async ngOnInit() {
    // Get the current user
    const user = await this.userService.me();

    // Filter the user's languages by the ones they're allowed to use
    if (user && user.config && user.config.allowedLanguages) {
      this.languages = Languages.filter(lang => user.config.allowedLanguages.includes(lang.code));
    }

    // Sort by language name, not code.
    this.languages = sortBy(this.languages, 'name');

  }

  /**
   * Fired when the user changes their language
   */
  onLanguageChanged () {
    this.languageChanged.emit(this.selectedLanguage);
  }

}
