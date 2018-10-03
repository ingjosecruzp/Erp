import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsubgrupocomponentesComponent } from './gridsubgrupocomponentes.component';

describe('GridsubgrupocomponentesComponent', () => {
  let component: GridsubgrupocomponentesComponent;
  let fixture: ComponentFixture<GridsubgrupocomponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsubgrupocomponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsubgrupocomponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
