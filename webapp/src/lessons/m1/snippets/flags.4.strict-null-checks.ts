import { Employee } from "./types"
declare const employees: Employee[]

const john: Employee | undefined = employees.find(e => e.firstName === 'John')

type TrainingGroup = {
  date?: Date
  employees: Employee[]
}

let training: TrainingGroup = { employees: [] }

if (training.date) {
  const dateStr = training.date.toISOString()
}
