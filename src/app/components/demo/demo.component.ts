import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'; 

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items =['nicolas','paula','fernando'];
  persona ="";
  power=10;
 
 
  addItem(ob:string){
    this.items.push(ob);
  }
  deleteItem(index:number)
  {
    this.items.splice(index,1);
  }
}
