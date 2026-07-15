import { PartialType } from "@nestjs/mapped-types";
import { productdto } from "./product.dto";

export class PartialproductDto extends PartialType(productdto){}