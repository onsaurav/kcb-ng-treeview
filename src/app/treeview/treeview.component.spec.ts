import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewComponent } from './treeview.component';

describe('TreeviewComponent', () => {
  let component: TreeviewComponent;
  let fixture: ComponentFixture<TreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
