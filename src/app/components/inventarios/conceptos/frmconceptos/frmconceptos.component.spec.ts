import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmconceptosComponent } from './frmconceptos.component';

describe('FrmconceptosComponent', () => {
  let component: FrmconceptosComponent;
  let fixture: ComponentFixture<FrmconceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmconceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmconceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
