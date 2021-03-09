import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ProductsService} from '@core/service/products/products.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
//con active route obtenemos el id de la url
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  
  form!:FormGroup ;
  id:string="";
  constructor(private formBuilder:FormBuilder,private productService:ProductsService,
    private router:Router,
    private activeRoute:ActivatedRoute) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product=>{
        this.form.patchValue(product) //inyecta los datos
      })
    })
  }

  private buildForm()
  {
    this.form= this.formBuilder.group({ //crea un grupo
      title:['',Validators.required],
      price:[0,Validators.required],
      image:[''],
      description:['',Validators.required]
    });
  }

  updateProduct(event:Event)
  {
    event.preventDefault(); //un formulario intentará recargar la página entonces evitamos ese comportamiento
    if(this.form.valid)
    {
      const product = this.form.value;
      this.productService.updateProduct(this.id,product).subscribe((newProduct)=>{
        this.router.navigate(['./admin/products']); //se redirecciona a la página de productos
      });
      
  
      
      console.log(this.form.value); //imprime los valores del formulario
    }
  }
 
}
