import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmtipoconceptosComponent } from './frmtipoconceptos.component';

describe('FrmtipoconceptosComponent', () => {
  let component: FrmtipoconceptosComponent;
  let fixture: ComponentFixture<FrmtipoconceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmtipoconceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmtipoconceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
