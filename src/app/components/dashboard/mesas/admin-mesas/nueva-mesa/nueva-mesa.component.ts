import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nueva-mesa',
  templateUrl: './nueva-mesa.component.html',
  styleUrls: ['./nueva-mesa.component.css']
})
export class NuevaMesaComponent {

  getUserIdFromLocalStorage(): string | null {
    const userIdString = localStorage.getItem('id_usuario');
    return userIdString;
  }

  ngOnInit(): void {
    const userId = this.getUserIdFromLocalStorage();
  }
}
