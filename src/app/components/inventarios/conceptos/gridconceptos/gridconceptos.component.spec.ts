import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridconceptosComponent } from './gridconceptos.component';

describe('GridconceptosComponent', () => {
  let component: GridconceptosComponent;
  let fixture: ComponentFixture<GridconceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridconceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridconceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
