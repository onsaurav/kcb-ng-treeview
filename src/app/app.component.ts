import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TreeviewComponent } from './treeview/treeview.component'; // Adjust the path as needed
import { TreeControlComponent } from './tree-control/tree-control.component'; // Adjust the path as needed
interface TreeNode {
  label: string;
  children?: TreeNode[];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TreeviewComponent, TreeControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  treeData = [
    {
      label: 'Parent 1',
      children: [
        {
          label: 'Child 1-1',
          children: [
            { label: 'Grandchild 1-1-1' },
            { label: 'Grandchild 1-1-2' }
          ]
        },
        { label: 'Child 1-2' }
      ]
    },
    {
      label: 'Parent 2',
      children: [
        {
          label: 'Child 2-1',
          children: [
            { label: 'Grandchild 2-1-1' }
          ]
        }
      ]
    }
  ];

  steps = 3; // Define how many levels of tree views to display
}
