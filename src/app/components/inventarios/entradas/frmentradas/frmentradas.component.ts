import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { EventEmitter } from 'events';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';
import { Entradas } from '../../../../models/Inventarios/entradas';
import { Concepto } from '../../../../models/Inventarios/concepto';
import { Almacen } from '../../../../models/Inventarios/almacen';
import { TipoconceptoService } from '../../../../services/inventarios/tipoconcepto.service';
import { AlmacenService } from '../../../../services/inventarios/almacen.service';
import { Articulo } from '../../../../models/Inventarios/articulos';
import { Unidad } from '../../../../models/Generales/Unidad';
import { ArticulosService } from '../../../../services/inventarios/articulos.service';
import { OverlayPanel } from 'primeng/primeng';
import { ObjectUtils } from 'primeng/components/utils/objectutils';


@Component({
  selector: 'app-frmentradas',
  templateUrl: './frmentradas.component.html'
 
})
export class FrmentradasComponent extends FrmBase<Entradas> implements OnInit, IFrmBase {
  FrmEntradas: FormGroup;
  displayDialog: boolean;
  TipoConceptos: Concepto[];
  Almacen: Almacen[];
  detallesEntradas: FormArray;


  constructor(public config: DialogConfig,
    public dialog: DialogRef,
    private fb: FormBuilder,
    private WsConcepto: TipoconceptoService,
    private WsAlmacenes: AlmacenService,
    private WsArticulos: ArticulosService,
    private confirmationService: ConfirmationService, public objectUtils: ObjectUtils) {
      super();
    this.displayDialog = true;

     }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      fecha: [null, [Validators.required]],
      folio: [null, [Validators.required]],
      TipoConceptos: [null, [Validators.required]],
      Almacen: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      detallesEntradas: this.fb.array([this.createDetallesEntradas()]),
   });
  }

  createDetallesEntradas(): FormGroup {
    return this.fb.group({
      Clave: [null, [Validators.required]],
      Articulo: [null, [Validators.required]],
      Cantidad: [null, [Validators.required]],
      Unidad: [null, [Validators.required]],
      Costo: [null, [Validators.required]],
      CostoTotal: [null, [Validators.required]]
    });
  }

  save() {
    console.log(this.FrmItem.value);
    console.log(this.FrmItem);
  }
  agregarFilas() {
    this.detallesEntradas = this.FrmItem.get('detallesEntradas') as FormArray;
    this.detallesEntradas.push(this.createDetallesEntradas());
  }
  public searchCondiciones(event, ws) {
    ws.search(event.query).subscribe(data => {
      this.CondicionesDePago = data;
    });
  }
  cargarArticulos(event) {
    this.WsArticulos.search(event.query).subscribe(data => {
      this.CondicionesDePago = data;
    });
  }

  mostrarArticulos(event , detalle , grid: OverlayPanel) {
    console.log(event);
    /*console.log(detalle);
    console.log(grid);*/

    grid.toggle(event);
  }
}

