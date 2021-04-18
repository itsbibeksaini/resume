import { Component } from '@angular/core';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCogs, faEnvelope, faGlobe, faGraduationCap, faHome, faIdBadge, faLightbulb, faMobileAlt, faPhoneAlt, faStar, faTools, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bibek Saini';

  faEnvelope = faEnvelope
  faMobileAlt = faMobileAlt
  faHome = faHome
  faGithub = faGithub
  faCogs = faCogs
  faUserGraduate = faUserGraduate
  faIdBadge = faIdBadge
  faGlobe = faGlobe
  faLinkedin = faLinkedin
  faBriefcase = faBriefcase
  faGraduationCap = faGraduationCap
  faTools = faTools
  faLightbulb = faLightbulb
  faStar = faStar
  
}
