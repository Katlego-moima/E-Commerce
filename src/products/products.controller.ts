import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './dtos/product.dto';
import { Product } from './interfaces/product.interface';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    findAll(): Promise<Product[]>{
        return this.productsService.findAll();
    }

    @Get(':id')
    find(@Param('id') id): Promise<Product> {
        return this.productsService.find(id);
    }

    @Post()
    createProduct(@Body() product: ProductDTO): Promise<Product> {
        return this.productsService.Create(product);
    }

    @Put(':id')
    updateProduct(@Param('id') id, @Body() product: ProductDTO): Promise<Product> {
        return this.productsService.update(id, product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id): Promise<Product> {
        return this.productsService.delete(id);
    }
}
