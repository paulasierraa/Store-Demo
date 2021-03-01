import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ProductsService} from 'src/app/core/service/products/products.service';
import {Router} from '@angular/router';
import {MyValidators} from 'src/utils/validators';

import {finalize} from 'rxjs/operators'; //pipe finalize
import {AngularFireStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';
 //formGroup grupo de controles
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!:FormGroup ;
  image!:Observable<any>;
  constructor(private formBuilder:FormBuilder,private productService:ProductsService,
    private router:Router, private storage:AngularFireStorage) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm()
  {
    this.form= this.formBuilder.group({ //crea un grupo
      id:['',[Validators.required]],
      title:['',Validators.required],
      price:[0,Validators.required],
      image:[''],
      description:['',Validators.required]
    });
  }

  saveProduct(event:Event)
  {
    event.preventDefault(); //un formulario intentará recargar la página entonces evitamos ese comportamiento
    if(this.form.valid)
    {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe((newProduct)=>{
        this.router.navigate(['./admin/products']); //se redirecciona a la página de productos
      });
      
  
      
      console.log(this.form.value); //imprime los valores del formulario
    }
  }
  //MÉTODO PARA SUBIR EL ARCHIVO
  uploadFile(event:Event)
  {
    const target = event.target as HTMLInputElement; //nos trae el elemento
    const file: File = (target.files as FileList)[0];
    console.log(file); //ver la info del archivo
    const dir =  file.name; // en qué directorio queremos el archivo
    const fileRef = this.storage.ref(dir);//saber qué referencia tiene la carpeta
    //creamos la tarea de subirla
    const task = this.storage.upload(dir,file);
    
    task.snapshotChanges() //saber cuando finaliza o cuando no 
    .pipe(
      finalize(()=>{
        this.image=fileRef.getDownloadURL();
        this.image.subscribe(url=>{
          console.log(url)
          this.form.get('image')?.setValue(url);
        })
      })
    )
    .subscribe();
  }
 
}
