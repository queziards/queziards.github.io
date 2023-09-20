import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-item-dropdown',
  templateUrl: './item-dropdown.component.html',
  styleUrls: ['./item-dropdown.component.css']
})

export class ItemDropdownComponent implements OnInit {
  modelos: any = [];
  item: any = [];
  modelo: string = "";
  select1: any = {};
  select2: any = "Selecione";

  itens = [
    {
      id:0,
      nome: "Selecione",
      modelos: ['Selecione'],
    },
    {
      id:1,
      nome: 'Vestido',
      modelos: ['Euphoria', 'Pink Barbie', 'Summer', 'Black Versace', 'Weeknd', 'Fine'],
    },
    {
      id:2,
      nome: 'Acessorios',
      modelos: ['Bolsa Diesel', 'Bolsa Versace', 'Bolsa Doce & Gabbana'],
    },
  ];
  constructor(){}
  ngOnInit() {
   this.select1=0;
   this.modelos = this.itens.filter((x) => x.id == this.select1)[0].modelos;    
  }
  onChange(){
    this.select2 = '';
    this.modelos = this.itens.filter((x) => x.id == this.select1)[0].modelos;    
  }
  clickbutton(){
    this.item = this.itens.find((x) => x.id == this.select1)?.nome; 
    this.modelo= this.select2;
  }
}

