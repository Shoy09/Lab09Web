import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./saludo/saludo.component";
import { ContadorComponent } from "./contador/contador.component";
import { ListComponent } from "./list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SaludoComponent, ContadorComponent, ListComponent]
})
export class AppComponent {
  title = 'Laboratorio09';
}
