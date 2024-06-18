import { WorkingHours } from "src/models/workingHours.interfaces"

const findWorkingHours = (workingHours: WorkingHours[], dayOfWeek: string) => {
    return workingHours.find(workingHour => workingHour.dayOfWeek.toLowerCase() === dayOfWeek.toLowerCase())
}

export default findWorkingHours