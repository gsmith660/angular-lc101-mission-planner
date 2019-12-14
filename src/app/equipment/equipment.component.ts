import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentList: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ]
  itemBeingEdited = null;

  constructor() { }

  ngOnInit() {
  }

  add(newItem: string) {
    this.equipmentList.push(newItem);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(newItem: string, item: string) {
    let index = this.equipmentList.indexOf(item);
    this.equipmentList.splice(index, 1, newItem);
    this.itemBeingEdited = null;
  }

  remove(item: string) {
    let index = this.equipmentList.indexOf(item);
    this.equipmentList.splice(index, 1);
  }

}
