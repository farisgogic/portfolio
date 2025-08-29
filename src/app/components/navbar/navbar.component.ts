import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarActive = false; 
  activeSection: string = 'about';

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  setActive(sectionId: string) {
    this.activeSection = sectionId;
    this.isNavbarActive = false; // close on mobile after click
  }

  private updateActiveSection() {
    const sections = ['about', 'skills', 'projects', 'contact'];
    let current = this.activeSection;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) { continue; }
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        current = id;
        break;
      }
    }
    this.activeSection = current;
  }
}
