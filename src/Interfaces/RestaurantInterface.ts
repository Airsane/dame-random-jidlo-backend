import {
    DataMetadata,
    MenuTags,
    ProductVariation, Schedule,
    ScoreCriteria,
    SpecialDay,
    Topping,
    VendorLegalInformation
} from "./ProductVariationInterface";

export interface IRestaurant {
    status_code: number;
    data:        Data;
}

export interface Data {
    id:                               number;
    code:                             string;
    accepts_instructions:             boolean;
    address:                          string;
    address_line2:                    string;
    budget:                           number;
    deals:                            any[];
    chain:                            Chain;
    city:                             City;
    constraints:                      null;
    cuisines:                         Cuisine[];
    custom_location_url:              string;
    customer_phone:                   string;
    customer_type:                    string;
    delivery_box:                     string;
    delivery_conditions:              DeliveryCondition[];
    delivery_fee_type:                string;
    delivery_fee_source:              string;
    delivery_provider_id:             number;
    description:                      string;
    discounts:                        any[];
    distance:                         number;
    experiments:                      Experiment[];
    food_characteristics:             FoodCharacteristic[];
    favorite_data:                    null;
    has_delivery_provider:            boolean;
    hero_image:                       string;
    hero_listing_image:               string;
    imprint:                          string;
    is_active:                        boolean;
    is_busy:                          boolean;
    is_best_in_city:                  boolean;
    is_checkout_comment_enabled:      boolean;
    is_delivery_enabled:              boolean;
    is_express_delivery_available:    boolean;
    is_express_delivery_enabled:      boolean;
    is_new:                           boolean;
    is_new_until:                     Date;
    is_pickup_enabled:                boolean;
    is_premium:                       boolean;
    premium_position:                 number;
    is_preorder_enabled:              boolean;
    is_promoted:                      boolean;
    is_replacement_dish_enabled:      boolean;
    is_service_fee_enabled:           boolean;
    is_service_tax_enabled:           boolean;
    is_service_tax_visible:           boolean;
    is_test:                          boolean;
    is_vat_disabled:                  boolean;
    is_vat_included_in_product_price: boolean;
    is_vat_visible:                   boolean;
    is_vat_included:                  boolean;
    is_voucher_enabled:               boolean;
    is_super_vendor:                  boolean;
    latitude:                         number;
    location_event:                   null;
    logo:                             string;
    longitude:                        number;
    loyalty_percentage_amount:        number;
    loyalty_program_enabled:          boolean;
    food_license_number:              string;
    maximum_express_order_amount:     number;
    menus:                            Menu[];
    toppings:                         { [key: string]: Topping };
    metadata:                         DataMetadata;
    minimum_delivery_fee:             number;
    minimum_delivery_time:            number;
    minimum_order_amount:             number;
    minimum_pickup_time:              number;
    multiple_toppings:                boolean;
    name:                             string;
    original_delivery_fee:            number;
    payment_types:                    any[];
    post_code:                        string;
    primary_cuisine_id:               number;
    rating:                           number;
    topic_ratings:                    null;
    redirection_url:                  string;
    review_number:                    number;
    review_with_comment_number:       number;
    schedules:                        Schedule[];
    scoreCriteria:                    ScoreCriteria;
    service_fee:                      number;
    service_fee_percentage_amount:    number;
    service_tax_percentage_amount:    number;
    special_days:                     SpecialDay[];
    tag:                              string;
    tags:                             null;
    time_picker:                      null;
    trade_register_number:            string;
    url_key:                          string;
    vat_percentage_amount:            number;
    characteristics:                  Characteristics;
    vendor_legal_information:         VendorLegalInformation;
    vendor_points:                    number;
    vertical:                         string;
    vertical_segment:                 string;
    vertical_parent:                  string;
    order_flow:                       string;
    web_path:                         string;
    website:                          string;
    has_online_payment:               boolean;
    is_partner_cashback_disabled:     boolean;
}

export interface Chain {
    id:                           number;
    is_accepting_global_vouchers: boolean;
    main_vendor_code:             string;
    main_vendor_id:               number;
    name:                         string;
    url_key:                      string;
    code:                         string;
}

export interface Characteristics {
    cuisines:             Cuisine[];
    food_characteristics: FoodCharacteristic[];
    primary_cuisine:      Cuisine;
}

export interface Cuisine {
    id:      number;
    name:    string;
    url_key: string;
    main:    boolean;
}

export interface FoodCharacteristic {
    id:            number;
    name:          string;
    is_halal:      boolean;
    is_vegetarian: boolean;
}

export interface City {
    id:                          number;
    name:                        string;
    url_key:                     string;
    is_top_city:                 boolean;
    is_main_city:                boolean;
    is_express_delivery_enabled: boolean;
    latitude:                    number;
    longitude:                   number;
    timezone:                    string;
}

export interface DeliveryCondition {
    delivery_fee:         number;
    delivery_fee_type:    string;
    minimum_order_amount: number;
    maximum_order_amount: number;
}

export interface Experiment {
    experiment_id:        string;
    experiment_variation: string;
    is_participating:     boolean;
}

export interface Menu {
    ab_sorting_applied: boolean;
    id:                 number;
    code:               string;
    name:               string;
    description:        string;
    type:               string;
    opening_time:       string;
    closing_time:       string;
    menu_categories:    MenuCategory[];
    toppings:           { [key: string]: Topping };
    tags:               MenuTags;
}

export interface MenuCategory {
    id:                  number;
    code:                string;
    name:                string;
    description:         string;
    products:            Product[];
    is_popular_category: boolean;
}

export interface Product {
    id:                       number;
    code:                     string;
    name:                     string;
    description:              string;
    display_price:            string;
    master_category_id:       number;
    file_path:                string;
    logo_path:                string;
    images_urls:              any[];
    images:                   Image[];
    is_prepacked_item:        boolean;
    is_sold_out:              boolean;
    is_express_item:          boolean;
    exclude_dish_information: boolean;
    additives:                any[];
    is_alcoholic_item:        boolean;
    sold_out_options:         any[];
    product_variations:       ProductVariation[];
    half_type:                string;
    is_half_type_available:   boolean;
    is_bundle:                boolean;
    tags?:                    string[];
}

export interface Image {
    image_url: string;
    tags:      ImageTags;
}

export interface ImageTags {
}


