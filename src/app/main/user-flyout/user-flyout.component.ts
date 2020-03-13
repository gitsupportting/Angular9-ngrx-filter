import { Component, OnInit } from '@angular/core';

import { User } from '../../services/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-flyout',
  templateUrl: './user-flyout.component.html',
  styleUrls: ['./user-flyout.component.less']
})
export class UserFlyoutComponent implements OnInit {

  currentUser:User;

  constructor(private userService:UserService) { }

  async ngOnInit() {

    this.currentUser = await this.userService.me()

  }

}
