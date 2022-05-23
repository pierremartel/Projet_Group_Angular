import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledgement-page',
  templateUrl: './acknowledgement-page.component.html',
  styleUrls: ['./acknowledgement-page.component.css']
})
export class AcknowledgementPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackToHome(): void {
    this.router.navigateByUrl('');
  }

}
