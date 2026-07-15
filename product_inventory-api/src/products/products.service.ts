import { Injectable } from '@nestjs/common';
import { updateproductDto } from './dto/partialproduct.dto';
import { PartialproductDto } from './dto/partialproducts.dto';
import { productdto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { result } from './Result';
import { products } from './Entity/products.entity';

@Injectable()
export class ProductsService {
     constructor ( @InjectRepository(products) private productRepo: Repository<products> ){} 

   async Create( data:productdto) : Promise<result<productdto>>{

        const Result = new result<productdto>();
        try{
         const check = await this.productRepo.findOne({ where: { name: data.name } });

         if(check == null){
            const incertdata = await this.productRepo.save(data);
            if(incertdata){
            Result.message = "Product Added Succesfully";
            Result.data = data;
            return Result;
            }
            Result.message = "Product Adding Failed";
            Result.success = false;
            console.log("twaing")
            return Result;
            }
            Result.message = "Name already exist"; ;
            Result.data = data;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;

        }


        return Result ;

    }

    async Findall() : Promise<result<updateproductDto[]>>{

        const Result = new result<updateproductDto[]>();
        try{
         const check = await this.productRepo.find();

         if(check.length === 0){
            Result.message = "No products found";
            return Result;
            }
            Result.message = `${check.length} products found` ;
            Result.data = check;
            Result.success = true;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    async FindOne(id:number) : Promise<result<productdto>>{

        const Result = new result<productdto>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            return Result;
            }
            Result.message = `Product found`;
            Result.data = check;
            Result.success = true;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    async Update(id:number , data:PartialproductDto) : Promise<result<PartialproductDto>>{

        const Result = new result<PartialproductDto>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
        
        const updatedb = await this.productRepo.update(id,data);
        if(updatedb.affected && updatedb.affected == 1){
            const updatedProduct = await this.productRepo.findOne({ where:{id:id}});
            Result.message = `Product Updated Succesfully`;
            Result.data = updatedProduct ?? check;
            return  Result;
        }
            Result.message = `Product Update Failed`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    async Replace(id:number , data:updateproductDto) : Promise<result<updateproductDto>>{

        const Result = new result<updateproductDto>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
        
        const updatedb = await this.productRepo.update(id,data);
        if(updatedb.affected && updatedb.affected == 1){
            Result.message = `Product Updated Succesfully`;
            Result.data = check;
            return  Result;  
        }
            Result.message = `Product Update Failed`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

     async Remove(id:number ) : Promise<result<updateproductDto>>{

        const Result = new result<updateproductDto>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
        
        const remove = await this.productRepo.delete(id);
        if(remove.affected && remove.affected == 1){
            Result.message = `Product deleted Succesfully`;
            Result.data = check;
            return  Result;  
        }
            Result.message = `Product delete Failed`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
    
    async search(term:string ) : Promise<result<productdto[]>>{

        const Result = new result<productdto[]>();
        console.log(term);
        try{
         const check = await this.productRepo.find({ where:{name: Like(`%${term}%`)}});

         if(check.length == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
            Result.message = `${check.length} Product found`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
    
    async toggleActive(id:number ) : Promise<result<productdto>>{

        const Result = new result<productdto>();
        try{
         const check = await this.productRepo.findOneBy({id});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
            check.isActive = !check.isActive; // toggled the button 

            Result.message = `Product Toggled to ${check.isActive}`;
            
            this.productRepo.save(check);
            Result.data = check;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
    async bycategory(cat:string) : Promise<result<updateproductDto[]>>{

        const Result = new result<updateproductDto[]>();
        try{
         const check = await this.productRepo.find({where:{category:cat}});

         if(check.length === 0){
            Result.message = "No products found";
            return Result;
            }
            Result.message = `${check.length} products found` ;
            Result.data = check;
            Result.success = true;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
}
