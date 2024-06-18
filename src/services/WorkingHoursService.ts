import { WorkingHours, WorkingHoursCreate, WorkingHoursUpdate } from "src/models/workingHours.interfaces";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { restaurantMicroservice } from "./axios";

export class WorkingHoursService {

    public static parseWorkingHoursFromResponseData(data: any): WorkingHours {
        return {
            id: data.id,
            dayOfWeek: data.day_of_week,
            openingTime: data.opening_time,
            closingTime: data.closing_time
        }
    }

    public static parseWorkingHoursListFromResponseData(data: any): WorkingHours[] {
        return data.map((workingHours: any) => this.parseWorkingHoursFromResponseData(workingHours))
    }

    public static parseWorkingHoursCreateDataToRequestData(workingHours: WorkingHoursCreate): any {
        return {
            day_of_week: workingHours.dayOfWeek.toLowerCase(),
            opening_time: workingHours.openingTime,
            closing_time: workingHours.closingTime,
            restaurant_id: workingHours.restaurantId
        }
    }

    public static parseWorkingHoursUpdateDataToRequestData(workingHours: WorkingHoursUpdate): any {
        return {
            day_of_week: workingHours.dayOfWeek.toLowerCase(),
            opening_time: workingHours.openingTime,
            closing_time: workingHours.closingTime
        }
    }

    public static async createWorkingHours(data: WorkingHoursCreate): Promise<WorkingHours> {
        const workingHoursCreateData = this.parseWorkingHoursCreateDataToRequestData(data)

        return await sendPrivateRequest<WorkingHours>(async () => {
            const response = await restaurantMicroservice.post('/hours/', workingHoursCreateData)
            return this.parseWorkingHoursFromResponseData(response.data)
        })
    }

    public static async updateWorkingHours(data: WorkingHoursUpdate): Promise<WorkingHours> {
        const workingHoursUpdateData = this.parseWorkingHoursUpdateDataToRequestData(data)

        return await sendPrivateRequest<WorkingHours>(async () => {
            const response = await restaurantMicroservice.put(`/hours/${data.id}/`, workingHoursUpdateData)
            return this.parseWorkingHoursFromResponseData(response.data)
        })
    }

    public static async deleteWorkingHours(id: string): Promise<void> {
        await sendPrivateRequest<void>(async () => {
            await restaurantMicroservice.delete(`/hours/${id}/`)
        })
    }
    
}
