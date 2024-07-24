import { Component } from '@angular/core';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrl: './web-component.component.scss'
})
export class WebComponentComponent {
  card1 = [
    {
      titolo: `Sviluppo Front-End`,
      testo: `Ho deciso di specializzarmi nel <strong>Front-End</strong> fin dall'inizio del mio
        percorso nello <strong>sviluppo Web</strong>. <br>
        La possibilità di trasformare <strong>idee creative</strong> in <strong>applicazioni pratiche</strong> mi ha convinto a iniziare questo
        percorso.`,
      foto: `../../../assets/angularJs.png`
    }
  ];


  card2 = [
    {
      titolo: `UX / UI Design`,
      testo: `Nella mia crescita come <strong>Web Developer</strong>,
ho integrato nel mio workflow programmi come <strong>Figma e Adobe XD</strong>. <br>
Acquisire competenze nella <strong>progettazione</strong> è stato uno step fondamentale nel mio percorso da web developer.`,
      foto: `../../../assets/difference-between-ux-ui-ux-ui-min-6cd3a171087987d31ecdb67ad67c0ab8136242f7b4e476a0e509017aa8bbc755.png`
    }
  ]


  card3 = [
    {
      titolo: `Arti visive digitali`,
      testo: `Da sempre appassionato di <strong> arti visive</strong>, ho scelto di intraprendere la <strong>carriera tech</strong> con lo scopo preciso di creare strumenti digitali non solo utili, ma anche di <strong>rilevanza artistica</strong>. <br> La scelta di concentrarmi sullo sviluppo <strong>Front-End</strong> deriva anche da questo fattore.`,
      foto: `../../../assets/web-1045994_1920.jpg`
    }
  ]
  formatText(text: string): string {
    return text.replace(/<strong>/g, '<strong class="fw-bold">');
  }
}
