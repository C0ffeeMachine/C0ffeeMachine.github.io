import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(private brekpointObserver: BreakpointObserver){
    this.brekpointObserver.observe([Breakpoints.HandsetPortrait,Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) =>{
        for (let breakpoint of Object.keys(result.breakpoints)){
          if(result.breakpoints[breakpoint]){ // if true
            if(breakpoint==Breakpoints.HandsetPortrait)
              this.pcMode = false;
            if(breakpoint==Breakpoints.WebLandscape)
              this.pcMode = true;
          }
        }
      }
    });
  }
}
