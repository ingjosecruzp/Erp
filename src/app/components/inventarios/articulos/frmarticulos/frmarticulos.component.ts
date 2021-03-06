import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray , FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Articulo } from '../../../../models/Inventarios/articulos';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from 'src/app/components/frmbase';
import { ArticulosService } from '../../../../services/inventarios/articulos.service';
import { GrupocomponenteService } from '../../../../services/inventarios/grupocomponente.service';
import { SubgrupocomponenteService } from '../../../../services/inventarios/subgrupocomponente.service';
import { GrupounidadesService } from '../../../../services/Generales/grupounidades.service';
import { MarcaService } from '../../../../services/Generales/marca.service';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { ObjectUtils } from 'primeng/components/utils/objectutils';
import { GrupoComponente } from '../../../../models/Generales/grupocomponente';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';
import { AlmacenService } from '../../../../services/inventarios/almacen.service';
import { Almacen } from '../../../../models/Inventarios/almacen';
import { OverlayPanel } from 'primeng/primeng';

@Component({
  selector: 'app-frmarticulos',
  templateUrl: './frmarticulos.component.html'
})
export class FrmarticulosComponent extends FrmBase<Articulo> implements OnInit, IFrmBase {
  displayDialog: boolean;
  SubgrupoComponenteId: string;
  GrupoUnidadId: string;
  images: any[];
  CodigosBarra: FormArray;
  Imagenes: FormArray;
  ConfiguracionesAlmacen: FormArray;

  constructor(private confirmationService: ConfirmationService, private WsArticulos: ArticulosService, private fb: FormBuilder,
              private WsGrupoComponente: GrupocomponenteService, private WsSubgrupoComponente: SubgrupocomponenteService,
              private WsGrupoUnidad: GrupounidadesService, private WsMarca: MarcaService, public config: DialogConfig,
              private WsAlmacenes: AlmacenService, public objectUtils: ObjectUtils) { 
    super();
    this.displayDialog = true;
    this.Ws = WsArticulos;
  }

  ngOnInit() {
    this.images = [];
    this.images.push({Source: 'NoImagen.jpg', alt: 'Description for Image 1'});
    this.images.push({Source: 'NoImagen.jpg', alt: 'Description for Image 2'});
    this.images.push({Source: 'NoImagen.jpg', alt: 'Description for Image 3'});

    this.FrmItem = this.fb.group({
      Clave: [null, [Validators.required]],
      NombreCorto: [null, [Validators.required]],
      Nombre: [null, [Validators.required]],
      GrupoComponente: [null, [Validators.required]],
      SubGrupoComponente: [null, [Validators.required]],
      GrupoUnidad: [null, [Validators.required]],
      Activo: [null, [Validators.required]],
      Marca: [null, [Validators.required]],
      Modelo: [null, [Validators.required]],
      NoParte: [null, [Validators.required]],
      Inventariable: [null, [Validators.required]],
      TipoSeguimiento: [null, [Validators.required]],
      UnidadInventario: [null, [Validators.required]],
      UnidadVenta: [null, [Validators.required]],
      UnidadCompra: [null, [Validators.required]],
      CodigosBarra: this.fb.array([this.createItem()]),
      ConfiguracionesAlmacen: this.fb.array([]),
      /*Imagenes: this.fb.array([])*/
   });
   
   // Agrega siempre tres espacios para imagenes
   /*this.Imagenes = this.FrmItem.get('Imagenes') as FormArray;
   this.Imagenes.push(this.agregarImagen()); 
   this.Imagenes.push(this.agregarImagen()); 
   this.Imagenes.push(this.agregarImagen());*/

   if (this.config.data._id !== undefined) {

      this.WsArticulos.get(this.config.data._id).subscribe(data => {
         this._id = data._id;
         
         for (let i = 0; i < data.CodigosBarra.length; i++) {
             this.CodigosBarra = this.FrmItem.get('CodigosBarra') as FormArray;
             this.CodigosBarra.push(this.createItem()); 
        }

        for (let i = 0; i < data.ConfiguracionesAlmacen.length; i++) {
          this.ConfiguracionesAlmacen = this.FrmItem.get('ConfiguracionesAlmacen') as FormArray;
          this.ConfiguracionesAlmacen.push(this.createAlmacenes(data.ConfiguracionesAlmacen[0].Almacen)); 
        }

         let item = new Articulo(data);
         
         this.FrmItem.patchValue(item);
         console.log('Respuesta del servidor', data);

         this.images = data.Imagen;
      });
   } 

   this.FrmItem.controls['GrupoComponente'].valueChanges.subscribe( data => {
      if ( data == null) { return; }

      this.SubgrupoComponenteId = data._id;
      this.FrmItem.controls['SubGrupoComponente'].reset();
      // this.FrmItem.controls['ConfiguracionesAlmacen'].reset();
      this.cargarGridAlmacenes();
   });
  
   this.FrmItem.controls['GrupoUnidad'].valueChanges.subscribe( data => {
      if ( data == null) { return; }
  
      this.GrupoUnidadId = data._id;
      this.FrmItem.controls['UnidadInventario'].reset();
      this.FrmItem.controls['UnidadVenta'].reset();
      this.FrmItem.controls['UnidadCompra'].reset();
   });

   this.FrmItem.controls['Inventariable'].valueChanges.subscribe( data => {
      // this.FrmItem.controls['ConfiguracionesAlmacen'].reset();
      this.cargarGridAlmacenes();
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      Unidad: [null, [Validators.required]],
      Codigo: [null, [Validators.required]],
      Activo: [null, [Validators.required]]
    });
  }

  createAlmacenes(almacen: Almacen): FormGroup {
    return this.fb.group({
      Almacen: [almacen, [Validators.required]],
      Maximo: [null, [Validators.required]],
      Reorden: [null, [Validators.required]],
      Minimo: [null, [Validators.required]],
      Localizacion: [null, [Validators.required]]
    });
  }

  cargarGridAlmacenes() {
    // console.log(this.FrmItem.dirty);
    if (this.FrmItem.dirty === false) { return; }

     let GrpComponente = this.FrmItem.get('GrupoComponente').value;
     let Inventariable = this.FrmItem.get('Inventariable').value;
     let frm = this.FrmItem;
     
     if (GrpComponente != null && (Inventariable != null && Inventariable === 'SI')) {
          console.log('TipoComponente ID', GrpComponente.TipoComponente._id);
          this.WsAlmacenes.searchXTipoComponente('', GrpComponente.TipoComponente._id).subscribe(data => {
              let Almacenes: Almacen[] = data;
               
              let self = this;
               Almacenes.forEach(function (almacen) {
                console.log(self.FrmItem); 

                 self.ConfiguracionesAlmacen = self.FrmItem.get('ConfiguracionesAlmacen') as FormArray;
                 self.ConfiguracionesAlmacen.push(self.createAlmacenes(almacen)); 
              });
          });
     }
  }

  
  save () {
    // this.CodigosBarra = this.FrmItem.get('CodigosBarra') as FormArray;
    // this.CodigosBarra.push(this.createItem());
    // console.log(this.FrmItem.value);
    // console.log(this.FrmItem);

    this.confirmationService.confirm({
        message: '¿Esta seguro de guardar la información?',
        header: 'Erp',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.item = new Articulo(this.FrmItem.value);
          this.item.Imagen = this.images;

          console.log(this.item);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }

  showUnidades(event, op: OverlayPanel) {
    console.log(event);
    console.log(op);
    op.toggle(event);
  }

  /***Imagenes ****/
  agregarImagen() {
    return this.fb.group({
      Source: ['http://localhost:60493/img/NoImagen.jpg', [Validators.required]],
    });
  }
  guardarImagen (event, img) {
      let reader = new FileReader();

      reader.onload = function (e) {
        img.Source = e.target['result'];
      };

      reader.readAsDataURL(event.files[0]);
  }
  /***************/
}

