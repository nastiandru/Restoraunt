class Customer
{
    
    name: string;
    email: string;
    phone: string;
    address: string;
    loyaltyPoints: number;

    constructor( name: string, email: string, phone: string, address: string, loyaltyPoints: number)
    {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.loyaltyPoints = loyaltyPoints;
    }

}

export default Customer;