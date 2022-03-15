import { WeatherListItem } from './../models/WeatherListItem.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input('location') location: WeatherListItem;
  showMenu: boolean = false;
  showAllButtonVisible: boolean = true;
  @Input('id') locationId: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.showMenu = !this.showMenu;
  }

  showAll() {
    document.querySelectorAll('.info.'+this.locationId+', .dropdown-item.'+this.locationId).forEach(element => {
      element.classList.add('active');
    });

    this.showAllButtonVisible = false;
  }

  hideAll() {
    document.querySelectorAll('.info.'+this.locationId+', .dropdown-item.'+this.locationId).forEach(element => {
      element.classList.remove('active');
    });

    this.showAllButtonVisible = true;
  }

  onSelect(targetClass) {
    document.querySelectorAll("." + targetClass + '.' + this.locationId).forEach(element => {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        element.classList.add('active');
      }
    })

    this.checkIfAllShowing();
  }

  checkIfAllShowing() {
    let allActive = true;
    document.querySelectorAll('.info.' + this.locationId).forEach(element => {
      if (!element.classList.contains('active')) {
        allActive = false;
      }
    });

    this.showAllButtonVisible = !allActive;
  }

}
