import { z } from "zod"
export const loginSchema = z.object({
  email:    z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})
export const createStudentSchema = z.object({
  name: z.string().min(2), email: z.string().email(),
  rollNumber: z.string().min(1), classId: z.string().min(1),
  dateOfBirth: z.string().min(1), gender: z.enum(["MALE","FEMALE","OTHER"]),
  parentId: z.string().optional(),
})
export type LoginFormData     = z.infer<typeof loginSchema>
export type CreateStudentData = z.infer<typeof createStudentSchema>
