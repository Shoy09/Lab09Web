import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule // Asegúrate de incluir CommonModule aquí si aún no lo has hecho
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  images: { title: string, url: string, description: string, updatedAt: Date }[] = [
    {
      title: 'Blue Lock',
      url: '../../assets/img/BlueLock.jpeg',
      description: 'Blue Lock”: ¿cuándo y dónde ver el capítulo 16 del Anime de fútbol de otoño 2022? ',
      updatedAt: new Date('2023-05-01') // Fecha de ejemplo
    },
    {
      title: 'El top 3 de la Sub-20',
      url: '../../assets/img/sub20.jpg',
      description: 'El top 3 de la Sub-20 y del Proyecto Blue entran al campo del partido - Blue Lock Capítulo 112 Manga',
      updatedAt: new Date('2023-05-01')
    },
    {
      title: 'Blue Lock 252',
      url: '../../assets/img/cap255.jpg',
      description: 'Blue Lock continúa el partido: el anime futbolero tendrá temporada 2 con nuevos fichajes',
      updatedAt: new Date('2023-05-01')
    },
    {
      title: 'Blue Lock',
      url: '../../assets/img/BlueLock.jpeg',
      description: 'Blue Lock”: ¿cuándo y dónde ver el capítulo 16 del Anime de fútbol de otoño 2022? ',
      updatedAt: new Date('2023-05-01') // Fecha de ejemplo
    },
    {
      title: 'El top 3 de la Sub-20',
      url: '../../assets/img/sub20.jpg',
      description: 'El top 3 de la Sub-20 y del Proyecto Blue entran al campo del partido - Blue Lock Capítulo 112 Manga',
      updatedAt: new Date('2023-05-01')
    },
    {
      title: 'Blue Lock 252',
      url: '../../assets/img/cap255.jpg',
      description: 'Blue Lock continúa el partido: el anime futbolero tendrá temporada 2 con nuevos fichajes',
      updatedAt: new Date('2023-05-01')
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
