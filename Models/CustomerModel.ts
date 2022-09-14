class Customer
{
    customerId: Number;
    name: string;
    email: string;
    phone: string;
    address: string;
    loyaltyPoints: number;

    constructor(customerId: Number, name: string, email: string, phone: string, address: string, loyaltyPoints: number)
    {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.loyaltyPoints = loyaltyPoints;
    }

}

export default Customer;