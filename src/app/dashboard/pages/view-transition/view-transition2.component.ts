import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: hero1"/>

      <div class="fixed bottom-1 bg-green-500 w-33 h-33 rounded" style="view-transition-name: hero2"></div>
    </section>
  `,
})
export default class ViewTransition2Component {

}
