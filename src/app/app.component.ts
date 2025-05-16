import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../components/footer/footer.component";
import { TabSectionComponent } from "../components/tab-section/tab-section.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { InfoSectionComponent } from "../components/info-section/info-section.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FooterComponent, TabSectionComponent, GalleryComponent, InfoSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}