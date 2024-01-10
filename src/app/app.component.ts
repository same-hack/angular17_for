import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // ユーザリストの宣言
  userList: any[] = [];

  /**ユーザ追加処理  */
  addUser() {
    // ユーザIDを定義
    const userId = this.userList.length + 1;
    // ユーザ情報を定義
    const user = {
      id: userId,
      name: `ユーザ${userId}`,
    };

    // ユーザを追加
    this.userList.push(user);
  }
}
