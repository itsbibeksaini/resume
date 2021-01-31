import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faHome, faLaptopCode, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faHome = faHome
  faLaptopHouse = faLaptopHouse
  faLaptopCode = faLaptopCode
  faCogs = faCogs

  faGithub = faGithub
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faInstagram = faInstagram
  constructor() { }

  ngOnInit(): void {
  }

}
