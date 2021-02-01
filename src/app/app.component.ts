import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faEnvelope, faHome, faPhoneAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bibek Saini';

  faEnvelope = faEnvelope
  faPhoneAlt = faPhoneAlt
  faHome = faHome
  faGithub = faGithub
  faCogs = faCogs
  faUserGraduate = faUserGraduate
}
