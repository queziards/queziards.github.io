import { Component,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {
  items = ['Vestido Euphoria', 'Vestido Pink Barbie', 'Vestido Summer', 'Vestido Versace', 'Vestido Weeknd', 'Vestido Fine'];
  itens2 = ['Vestido Euphoria', 'Vestido Summer', 'Bolsa Diesel'];

  valueItem = ''; //cria o valueItem que será atribuído ao ngModel



  @ViewChild('newItem') roupa: any;
 

  addNewItem(value: string) {
   
    this.items.push(value); 
  }

  addNewOutroItem() {
    this.items.push(this.roupa.nativeElement.value); //consegue ir lá buscar, não precisa de parametro
  }
  remove() {
    //define que comida que é um elemento nativo, passa a valer o que for definido
    this.roupa.nativeElement.value = ' ';
  }

  removeItens() {
    while (this.items.length > 0) {
      this.items.pop(); //remove ultimo elemento
    }
  }
  //------------------------------COMPONENTE2----------------------------------

  addNewItem2() {
    if (this.valueItem === '') alert('valor inválido :(');
    else this.itens2.push(this.valueItem);
  }
  ///simplifica, pois não precisa identificar que o elemento é nativo, nem o value, nem viewChild. Simplesmente usa o módulo.

  remove2() {
    this.valueItem = '';
  }

  removeItens2() {
    while (this.itens2.length > 0) {
      this.itens2.pop(); //remove ultimo elemento
    }
  }
}


