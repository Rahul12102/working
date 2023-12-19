import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [

    { id:101, name:'Javascript for beginners', author:'John Heikela', duration: 36, type: 'Free',
    price: 0.00, ratings: 4.2, image: 'assets/jsforbeginners.jpg',
    description: 'In this course you will learn the fundamentals of Javascript. This course is completely designed for beginners.'
    },
    { id:102, name:'Typescript', author:'Mark Vought', duration: 18, type: 'Free',
    price: 0.00, ratings: 3.9, image: 'assets/ts.jpg',
    description: 'In this course you will learn the fundamentals of Typescript. This course is completely designed for beginners.'
    },
    { id:103, name:'Angular for beginners', author:'Steve Smith', duration: 42, type: 'Premium',
    price: 0.00, ratings: 4.0, image: 'assets/ang.jpg',
    description: 'In this course you will learn the fundamentals of Angular. This course is completely designed for beginners.'
    },
    { id:104, name:' Advanced Javascript ', author:'John Heikela', duration: 45, type: 'Premium',
    price: 0.00, ratings: 3.8, image: 'assets/ads.jpg',
    description: 'In this course you will learn the fundamentals of Adv. Javascript. This course is completely designed for beginners.'
    },
    { id:105, name:'React for beginners', authorx :'Mark Vought', duration: 38, type: 'Free',
    price: 0.00, ratings: 4.1, image: 'assets/react.jpg',
    description: 'In this course you will learn the fundamentals of React. This course completely designed for beginners.'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  searchText: string ='';  

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText= searchValue;
    console.log(this.searchText);
  }

}
