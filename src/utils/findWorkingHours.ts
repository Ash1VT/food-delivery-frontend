import IWorkingHours from "src/redux/models/IWorkingHours"

const findWorkingHours = (workingHours: IWorkingHours[], dayOfWeek: string) => {
    return workingHours.find(workingHour => workingHour.dayOfWeek === dayOfWeek)
}

export default findWorkingHours