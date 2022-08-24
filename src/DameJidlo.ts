import axios from "axios";
import {IRestaurant, Menu, MenuCategory, Product} from "./Interfaces/RestaurantInterface";

export default class DameJidlo{
    private restaurant:IRestaurant | null = null;

    constructor(){
        console.log("DameJidlo");
    }

    private parseUrl(url:string):string{
        const code = url.split('restaurant')[1].split('/')[1];
        return `https://cz.fd-api.com/api/v5/vendors/${code}?include=menus,bundles,multiple_discounts,payment_types&language_id=3&dynamic_pricing=0&opening_type=delivery&basket_currency=CZK&latitude=50.034191&longitude=15.761055`;
    }

    private checkIfRestaurantIsLoaded(){
        if(this.restaurant === null){
            throw new Error("Restaurant not loaded");
        }
    }


    public async loadRestaurant(url:string){
        this.restaurant = (await axios.get(this.parseUrl(url))).data;
    }

    public async getRestaurant(url:string){
        if(this.restaurant === null){
            await this.loadRestaurant(url);
        }
        return this.restaurant;
    }

    public getRandomFood():Product{
        this.checkIfRestaurantIsLoaded();
        return this.getRandomItemFromArray(this.getRandomCategory().products);

    }

    public getAllFood():Product[]{
        this.checkIfRestaurantIsLoaded();

        const allFood: Product[] = [];
        this.restaurant!.data.menus.forEach(menu => {
            menu.menu_categories.forEach(category => {
                category.products.forEach(product => {
                    allFood.push(product);
                } );
            } );
        })
        return allFood;
    }

    private getRandomCategory():MenuCategory{
        this.checkIfRestaurantIsLoaded();
        return this.getRandomItemFromArray(this.getRandomMenu().menu_categories);
    }

    private getRandomMenu():Menu{
        this.checkIfRestaurantIsLoaded();
        return this.getRandomItemFromArray(this.restaurant!.data.menus);
    }

    private getRandomItemFromArray(item:any[]):any{
        return item[Math.floor(Math.random() * item.length)];
    }


}