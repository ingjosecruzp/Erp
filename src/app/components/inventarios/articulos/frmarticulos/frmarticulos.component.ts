import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Articulo } from '../../../../models/Inventarios/articulos';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from 'src/app/components/frmbase';
import { ArticulosService } from '../../../../services/inventarios/articulos.service';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { SubgrupocomponenteService } from '../../../../services/inventarios/subgrupocomponente.service';
import { GrupounidadesService } from '../../../../services/Generales/grupounidades.service';

@Component({
  selector: 'app-frmarticulos',
  templateUrl: './frmarticulos.component.html'
})
export class FrmarticulosComponent extends FrmBase<Articulo> implements OnInit, IFrmBase {
  displayDialog: boolean;
  SubgrupoComponenteId: string;

  constructor(private confirmationService: ConfirmationService, private WsArticulos: ArticulosService, private fb: FormBuilder,
              private WsGrupoComponente: GrupocomponenteService, private WsSubgrupoComponente: SubgrupocomponenteService,
              private WsGrupoUnidad: GrupounidadesService) { 
    super();
    this.displayDialog = true;
    this.Ws = WsArticulos;
  }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Clave: [null, [Validators.required]],
      NombreCorto: [null, [Validators.required]],
      Nombre: [null, [Validators.required]],
      GrupoComponente: [null, [Validators.required]],
      SubGrupoComponente: [null, [Validators.required]],
      GrupoUnidad: [null, [Validators.required]],
      Activo: [null, [Validators.required]]
   });


   this.FrmItem.controls['GrupoComponente'].valueChanges.subscribe( data => {
      this.SubgrupoComponenteId = data._id;
      this.FrmItem.controls['SubGrupoComponente'].reset();
   });

  }


  save () {
    this.confirmationService.confirm({
        message: '¿Esta seguro de guardar la información?',
        header: 'Erp',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.item = new Articulo(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }
}
