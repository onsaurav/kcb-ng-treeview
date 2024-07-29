import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeviewComponent } from './treeview/treeview.component';

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kcb-treeview';
  treeData: TreeNode[] = [
    {
      label: 'Parent 1',
      children: [
        { label: 'Child 1.1' },
        { label: 'Child 1.2', children: [{ label: 'Grandchild 1.2.1' }] }
      ]
    },
    {
      label: 'Parent 2',
      children: [
        { label: 'Child 2.1' },
        { label: 'Child 2.2' }
      ]
    }
  ];

  treeDataChield: TreeNode[] = [
    {
      label: 'Parent 1',
      children: [
        { label: 'Child 1.1' },
        { label: 'Child 1.2', children: [{ label: 'Grandchild 1.2.1' }] }
      ]
    },
    {
      label: 'Parent 2',
      children: [
        { label: 'Child 2.1' },
        { label: 'Child 2.2' }
      ]
    }
  ];
}
