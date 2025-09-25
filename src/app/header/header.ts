import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatDivider,
    MatMenuItem,
    MatButton,
    MatToolbar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
