import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridtipoconceptosComponent } from './gridtipoconceptos.component';

describe('GridtipoconceptosComponent', () => {
  let component: GridtipoconceptosComponent;
  let fixture: ComponentFixture<GridtipoconceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridtipoconceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridtipoconceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
