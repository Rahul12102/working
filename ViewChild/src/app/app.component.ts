import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }

  title = 'ViewChild';

  @ViewChild('dobInput')dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  @ViewChild(DemoComponent, {static:true}) demoComp!: DemoComponent;
  // Here in above line DemoComponent we have accessed child component in our Parent component class using ViewChild decorator.


    calculateAge(){
      let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
      let currentYear = new Date().getFullYear();
      let age = currentYear - birthYear;
      this.age.nativeElement.value = age;

    }
}
