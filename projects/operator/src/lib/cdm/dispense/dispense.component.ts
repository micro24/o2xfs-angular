import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cdm-dispense',
  templateUrl: './dispense.component.html',
})
export class DispenseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
