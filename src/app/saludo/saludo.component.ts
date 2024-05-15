import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent implements OnInit{

  titulo: string = 'Bienbenido a Angular';
  mensaje: string = 'Este es un componente de saludo creado en'

  constructor(){
  }
  ngOnInit(): void {
  }

}
