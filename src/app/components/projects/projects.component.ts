import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Cinematon',
      description: 'A web application for booking cinema seats, developed with C#, ASP.NET Core, and Angular. It includes administrative functionalities for managing screenings and a user interface for reservations.',
      link: 'https://github.com/farisgogic/Cinematon',
      technologies: ['assets/csharp.png', 'assets/dotnet.png', 'assets/angular.png']
    },
    {
      title: 'eDostava WinUI',
      description: 'A mobile and desktop application for food delivery, developed using C#, .NET 6.0, Windows Forms and Flutter.',
      link: 'https://github.com/farisgogic/eDostavaWinUI',
      technologies: ['assets/csharp.png', 'assets/dotnet.png', 'assets/flutter.png']
    },
    {
      title: 'To Do Application',
      description: 'A to-do application for task organization, developed using Vue.js, HTML, CSS, JavaScript. It enables users to create, edit, and track tasks through an intuitive user interface.',
      link: 'https://github.com/farisgogic/fareToDoApp',
      technologies: ['assets/vue.png', 'assets/html.png', 'assets/css.png', 'assets/js.png']
    },
    {
      title: 'Klopa',
      description: 'A food delivery system with three types of users: employees, couriers, and customers. The backend was developed using C#, .NET 6.0, while the desktop and mobile applications were implemented with Flutter.',
      link: 'https://github.com/farisgogic/eDostavaFlutter',
      technologies: ['assets/csharp.png', 'assets/dotnet.png', 'assets/flutter.png']
    },
    {
      title: 'Chrome Extension',
      description: 'Development of a Google Chrome extension with authentication functionalities and interaction with web pages, utilizing JavaScript, HTML, and CSS.',
      link: 'https://github.com/farisgogic/ChromeExtension',
      technologies: ['assets/html.png', 'assets/css.png', 'assets/js.png']
    },
    {
      title: 'Autobahn Project',
      description: 'Welcome to the Angular Project! This project is designed to showcase a sample Angular application that interacts with the Autobahn API.',
      link: 'https://github.com/farisgogic/angular-project',
      technologies: ['assets/html.png', 'assets/css.png', 'assets/js.png', 'assets/angular.png']
    },
  ];
  
}
