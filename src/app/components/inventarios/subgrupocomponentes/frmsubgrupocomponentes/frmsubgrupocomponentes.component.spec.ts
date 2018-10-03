import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmsubgrupocomponentesComponent } from './frmsubgrupocomponentes.component';

describe('FrmsubgrupocomponentesComponent', () => {
  let component: FrmsubgrupocomponentesComponent;
  let fixture: ComponentFixture<FrmsubgrupocomponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmsubgrupocomponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmsubgrupocomponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
