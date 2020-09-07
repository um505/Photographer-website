import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  alert() {
    window.alert('Thank you for contacting us! We will contact you as soon as possible!');
  }
  ngOnInit(): void {
  }

}
