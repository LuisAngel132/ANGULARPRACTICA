import { Component, OnInit } from '@angular/core';
import{ Persona } from '../../Modelos/persona'
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  Persona:Persona[]=[];
  constructor() { }

  ngOnInit(): void {
    this.Persona=[{
      nombre:"luis angel",
      apellidos:"Gutierrez Hernandez",
      edad:18,
      sexo:"M"
    },
    {
      nombre:"luis Fernando",
      apellidos:"Gutierrez Hernandez",
      edad:18,
      sexo:"M"
    }

    ];
  }

}
