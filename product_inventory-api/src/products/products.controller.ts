import { Controller ,Post , Get , Put , Patch, Body, Query , Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { updateproductDto } from './dto/partialproduct.dto';
import { PartialproductDto } from './dto/partialproducts.dto';
import { productdto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
   async createProduct(@Body() data:productdto){
    console.log(data);
    return await this.productsService.Create(data);
  }
  @Get()
  test(){ console.log("test")}

  @Get("Get-all")
  async Getall(){
    console.log("twaing");
    return await this.productsService.Findall();
  }
  @Get("search")
  search(@Query("Keyword") Keyword:string){
    console.log(Keyword);
    if (Keyword == null ||Keyword == "") {
      return "vhai add something to search";
    }
    return this.productsService.search(Keyword);
  }
@Get("category/:cat")
  catagory(@Param("cat") cat:string){
    console.log(cat);
    if (cat == null ||cat == "") {
      return "vhai add something to search";
    }
    return this.productsService.bycategory(cat);
  }
  @Get(":id")
  getbyid(@Param("id") id:number){
    console.log(id);
    if (id == null ||id < 1) {
      return "vhai add something to search";
    }
    return this.productsService.FindOne(id);
  }

  @Patch(":id")
  Updateproducts(@Param("id" , ParseIntPipe) id:number , @Body() updateData :PartialproductDto) {
     if (id == null ||id < 1) {
      return "vhai add something to search";
    }

    return this.productsService.Update(id,updateData)
  }

  @Put(":id")
  replace(@Param("id" , ParseIntPipe) id:number , @Body() updateData :updateproductDto) {
     if (id == null ||id < 1) {
      return "vhai add something to search";
    }

    return this.productsService.Replace(id,updateData)
  }

  @Delete(":id")
  delete(@Param("id" , ParseIntPipe) id:number){
    if(id<1){
      return "enter a valid id"
    }
    return this.productsService.Remove(id);

  }

  @Patch(":id/toggle")
  Togggleactive(@Param("id" , ParseIntPipe) id:number){
    if(id<1){
      return "enter a valid id"
    }
    return this.productsService.toggleActive(id);
  }
}
