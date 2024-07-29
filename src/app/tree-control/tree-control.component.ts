import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TreeviewComponent } from '../treeview/treeview.component'; // Import TreeviewComponent

@Component({
  selector: 'app-tree-control',
  standalone: true,
  templateUrl: './tree-control.component.html',
  styleUrls: ['./tree-control.component.css'],
  imports: [CommonModule, TreeviewComponent] // Import TreeviewComponent here
})
export class TreeControlComponent implements OnChanges, AfterViewInit {
  @Input() nodes: any[] = [];
  @Input() steps: number = 1;
  @Input() fixedStep: number = NaN;

  treeBoxWidth = "30%";

  treeViews: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.nodes || this.steps) {
      this.updateTreeViews();

      this.treeBoxWidth = (this.steps == 0 ? "30%" : (90/this.steps) + "%" );
    }
  }

  ngAfterViewInit(): void {
    this.updateTreeViews();
  }

  private updateTreeViews(): void {
    this.treeViews = this.generateTreeViews(this.nodes, this.steps);
  }

  private generateTreeViews(nodes: any[], steps: number): any[] {
    const views: any[] = [];
    let currentLevelNodes = nodes;

    for (let i = 0; i < steps; i++) {
      views.push(currentLevelNodes);
      currentLevelNodes = this.getChildren(currentLevelNodes);
    }

    return views;
  }

  private getChildren(nodes: any[]): any[] {
    return nodes.flatMap(node => node.children || []);
  }
}
