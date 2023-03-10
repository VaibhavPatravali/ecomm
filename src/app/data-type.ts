export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }

export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface cart {
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id: undefined | number,
    quantity:undefined | number,
    productId:undefined|number,
    userId: number
}

export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
}

export interface order{
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string
}