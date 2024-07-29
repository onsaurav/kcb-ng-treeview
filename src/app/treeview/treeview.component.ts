import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface TreeNode {
  label: string;
  children?: TreeNode[];
  checked?: boolean; // Add checked property
}

@Component({
  selector: 'app-treeview',
  standalone: true,
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css'],
  imports: [CommonModule] // Add CommonModule here
})
export class TreeviewComponent implements OnChanges {
  @Input() nodes: TreeNode[] = [];
  @Input() expandable: boolean = true; // Input to control top-level expandability
  @Input() expandAll: boolean = false; // Input to expand all nodes

  expandedIndex: number | null = null; // Track the currently expanded node index

  ngOnChanges(changes: SimpleChanges): void {
    if (this.expandAll) {
      this.expandAllNodes(this.expandAll);
    }
  }

  toggleNode(index: number): void {
    if (this.expandable) {
      if (this.expandedIndex === index) {
        this.expandedIndex = null;
      } else {
        this.expandedIndex = index;
      }
    }
  }

  isNodeOpen(index: number): boolean {
    return this.expandedIndex === index || this.expandAll;
  }

  toggleCheckbox(node: TreeNode): void {
    node.checked = !node.checked;
    if (node.children) {
      this.setCheckedRecursively(node.children, node.checked);
    }
    if (this.expandAll) {
      this.expandAllNodes(true); // Expand all nodes if expandAll is true
    }
  }

  setCheckedRecursively(nodes: TreeNode[], checked: boolean): void {
    nodes.forEach(node => {
      node.checked = checked;
      if (node.children) {
        this.setCheckedRecursively(node.children, checked);
      }
    });
  }

  isTopLevelExpandable(): boolean {
    return this.expandable;
  }

  private expandAllNodes(expand: boolean): void {
    if (expand) {
      this.expandAllRecursively(this.nodes);
    } else {
      this.expandedIndex = null;
    }
  }

  private expandAllRecursively(nodes: TreeNode[]): void {
    nodes.forEach((node, index) => {
      this.expandedIndex = index;
      if (node.children) {
        this.expandAllRecursively(node.children);
      }
    });
  }
}
