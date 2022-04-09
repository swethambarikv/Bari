// import { Component, OnChanges } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnChanges {
//   ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
//   }
//   title = 'ngcanvas';
//   constructor(){
//   // alert("1. on changes called");
//   console.log("OnChanges is called")
//   }
// }
import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    })
    export class AppComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy{
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    }
    ngOnInit(): void {
   // alert("2. on init is called");
   console.log("2. on init is called")
    }
    ngDoCheck(): void {
    //alert("3. do check is called");
    console.log("3. do check is called")
    }
    ngAfterContentInit(): void {
    // alert("4. after content init called");
    console.log("4. after content init called")
    }
    ngAfterContentChecked(): void {
   // alert("5. after content check called");
   console.log("5. after content check called")
    }
    ngAfterViewInit(): void {
    // alert('6. after view init called');
    console.log("6. after view init called")
    }
    ngAfterViewChecked(): void {
    // alert('7. after view init checked');
    console.log("7. after view init checked")
    }
    ngOnDestroy(): void {
    // alert('8. on destroy called');
    console.log("8. on destroy called")

    }
    title = 'ngcanvas';
    constructor(){
    // alert("1. on changes called");
    console.log("1. on changes called")
    }
    }
