import { CustomerAddress, CustomerAddressCreate, CustomerAddressUpdate } from "src/models/customerAddress.interfaces";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { orderMicroservice } from "./axios";

export class CustomerAddressService {

    public static parseCustomerAddressCreateToRequestData(data: CustomerAddressCreate): any {
        return {
            country: data.country,
            region: data.region,
            details: data.details
        }
    }

    public static parseCustomerAddressUpdateToRequestData(data: CustomerAddressUpdate): any {
        return {
            country: data.country,
            region: data.region,
            details: data.details
        }
    }

    public static parseCustomerAddressToResponseData(data: any): CustomerAddress {
        return {
            id: data.id,
            country: data.country,
            region: data.region,
            details: data.details,
            customerId: data.customerId,
            approvalStatus: data.approvalStatus
        }
    }

    public static parseCustomerAddressListToResponseData(data: any): CustomerAddress[] {
        return data.map((item: any) => this.parseCustomerAddressToResponseData(item));
    }

    public static async getCurrentCustomerAddresses(): Promise<CustomerAddress[]> {
        return await sendPrivateRequest<CustomerAddress[]>(async () => {
            const response = await orderMicroservice.get('/addresses/customer/');
            return this.parseCustomerAddressListToResponseData(response.data);
        });
    }

    public static async createCurrentCustomerAddress(data: CustomerAddressCreate): Promise<CustomerAddress> {
        const customerAddressCreateData = this.parseCustomerAddressCreateToRequestData(data);

        return await sendPrivateRequest<CustomerAddress>(async () => {
            const response = await orderMicroservice.post('/addresses/customer/', customerAddressCreateData);
            return this.parseCustomerAddressToResponseData(response.data);
        });
    }


    public static async deleteCurrentCustomerAddress(customerAddressId: string): Promise<void> {
        await sendPrivateRequest<void>(async () => {
            await orderMicroservice.delete(`/addresses/${customerAddressId}/customer/`);
        });
    }

    public static async getCustomersAddresses(status?: string): Promise<CustomerAddress[]> {
        return await sendPrivateRequest<CustomerAddress[]>(async () => {
            const response = await orderMicroservice.get(`/customers/addresses/${status ? `?status=${status}/` : ''}`);
            return this.parseCustomerAddressListToResponseData(response.data);
        });
    }

    public static async getCustomerAddress(customerAddressId: string): Promise<CustomerAddress> {
        return await sendPrivateRequest<CustomerAddress>(async () => {
            const response = await orderMicroservice.get(`/customers/${customerAddressId}/addresses/`);
            return this.parseCustomerAddressToResponseData(response.data);
        });
    }

    public static async updateCustomerAddress(data: CustomerAddressUpdate): Promise<CustomerAddress> {
        const customerAddressUpdateData = this.parseCustomerAddressUpdateToRequestData(data);

        return await sendPrivateRequest<CustomerAddress>(async () => {
            const response = await orderMicroservice.put(`customers/addresses/${data.id}/`, customerAddressUpdateData);
            return this.parseCustomerAddressToResponseData(response.data);
        });
    }

    public static async approveCustomerAddress(customerAddressId: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.patch(`/addresses/${customerAddressId}/approve/`);
        });
    }

    public static async rejectCustomerAddress(customerAddressId: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.patch(`/addresses/${customerAddressId}/reject/`);
        });
    }
    
}