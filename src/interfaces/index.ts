export interface Customer {
    firstName: string;
    lastName: string;
    role: string;
}
export interface ValidateCustomer extends Customer {
    creditCard?: string;
    phoneNumber?: string
}

export interface RegularCustomer extends Customer {
    phoneNumber: string
}

export interface VipCustomer extends Customer {
    creditCard: string
}

export interface RegularCustomer extends Customer {
    phoneNumber: string
}