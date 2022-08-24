export interface ProductVariation {
    id:                 number;
    code:               string;
    remote_code:        string;
    container_price:    number;
    price:              number;
    topping_ids:        number[];
    is_vegetarian:      boolean;
    is_non_vegetarian:  boolean;
    spiceness:          string;
    topping_properties: ToppingProperty[];
    unit_pricing:       null;
}

export interface ToppingProperty {
    id:                 number;
    use_original_price: boolean;
}

export interface MenuTags {
    popular: Popular;
}

export interface Popular {
    name:             string;
    translation_keys: TranslationKeys;
    elements:         string[];
    metadata:         PopularMetadata;
}

export interface PopularMetadata {
    sorting: number[];
}

export interface TranslationKeys {
    description: string;
    title:       string;
}

export interface Topping {
    id:               number;
    name:             string;
    description:      string;
    quantity_minimum: number;
    quantity_maximum: number;
    options:          Option[];
    type:             Type;
}

export interface Option {
    id:                      number;
    product_id:              number;
    name:                    string;
    description:             string;
    price:                   number;
    is_sold_out:             boolean;
    is_half_half_applicable: boolean;
    remote_code:             string;
}

export enum Type {
    ChoiceGroup = "choice-group",
}

export interface DataMetadata {
    is_delivery_available:         boolean;
    is_pickup_available:           boolean;
    is_express_delivery_available: boolean;
    is_temporary_closed:           boolean;
    has_discount:                  boolean;
    timezone:                      string;
    events:                        any[];
    close_reasons:                 any[];
    is_flood_feature_closed:       boolean;
    available_in:                  null;
}

export interface Schedule {
    id:           number;
    weekday:      number;
    opening_type: OpeningType;
    opening_time: OpeningTime;
    closing_time: ScheduleClosingTime;
}

export enum ScheduleClosingTime {
    The1830 = "18:30",
    The1930 = "19:30",
}

export enum OpeningTime {
    The0700 = "07:00",
    The0800 = "08:00",
    The1000 = "10:00",
}

export enum OpeningType {
    Delivering = "delivering",
    Pickup = "pickup",
}

export interface ScoreCriteria {
    vendor_id:     number;
    vendor_code:   string;
    coefficients:  null;
    vendor_values: null;
}

export interface SpecialDay {
    date:         Date;
    opening_type: OpeningType;
    opening_time: OpeningTime;
    closing_time: SpecialDayClosingTime;
}

export enum SpecialDayClosingTime {
    The1330 = "13:30",
    The1745 = "17:45",
    The1830 = "18:30",
    The1845 = "18:45",
}

export interface VendorLegalInformation {
    legal_name:            string;
    address_line_1:        string;
    trade_register_number: string;
}