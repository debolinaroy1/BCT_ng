// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   template: `
//     <h1>Welcome to {{ title() }}!</h1>
//     <h2>Hello everyone, I'm Devmalya</h2>

//     <router-outlet />
//   `,
//   styles: [],
// })
// export class App {
//   protected readonly title = signal('BCT_ng');
// }
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Add this if you're using standalone components
  imports: [RouterOutlet, Home],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <h2>Hello everyone, I'm Debolina</h2>
    <app-home/>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  protected readonly title = signal('BCT_ng');
}