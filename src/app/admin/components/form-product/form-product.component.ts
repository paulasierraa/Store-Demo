import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ProductsService} from 'src/app/core/service/products/products.service';
import {Router} from '@angular/router';
//formGroup grupo de controles
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!:FormGroup ;

  constructor(private formBuilder:FormBuilder,private productService:ProductsService,
    private router:Router) {
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
}
