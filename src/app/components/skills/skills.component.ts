import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'C#', image: 'assets/csharp.png' },
    { name: '.NET', image: 'assets/dotnet.png' },
    { name: 'Flutter', image: 'assets/flutter.png' },
    { name: 'Angular', image: 'assets/angular.png' },
    { name: 'HTML', image: 'assets/html.png' },
    { name: 'CSS', image: 'assets/css.png' },
    { name: 'JavaScript', image: 'assets/js.png' },
  ];
}
