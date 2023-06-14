import { Controller, Get, Post, Body, Query, Res, Req, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService, private readonly jwtService: JwtService,) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Req() req: Request, @Res() res: Response, @Body() createProductDto: CreateProductDto) {
    const jwtPayload = this.jwtService.decode(req.headers.authorization.split(' ')[1])
    console.log(jwtPayload);
    createProductDto["email"] = jwtPayload["email"]
    console.log(createProductDto)
    let createData = await this.productsService.create(createProductDto);
    return res.send(createData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const jwtPayload = this.jwtService.decode(req.headers.authorization.split(' ')[1])
    console.log(jwtPayload);
    let email = jwtPayload["email"]
    let findAll: any = await this.productsService.findAll(email);
    return res.send(findAll);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/getOne')
  async findOne(@Req() req: Request, @Res() res: Response, @Query('id') id: any) {
    const jwtPayload = this.jwtService.decode(req.headers.authorization.split(' ')[1])
    console.log(jwtPayload);
    let email = jwtPayload["email"]
    let getOne = await this.productsService.findOne(id, email);
    return res.send(getOne)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/update')
  async update(@Req() req: Request, @Res() res: Response, @Query('id') id: string, @Body() updateProductDto: CreateProductDto) {
    let updateData = await this.productsService.update(id, updateProductDto);
    return res.send(updateData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/delete')
  async remove(@Req() req: Request, @Res() res: Response, @Query('id') id: string) {
    let deleteData = await this.productsService.remove(+id);
    return res.send(deleteData);
  }
}
