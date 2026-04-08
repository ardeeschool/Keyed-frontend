export type UserRole = "SUPER_ADMIN" | "SCHOOL_ADMIN" | "TEACHER" | "STUDENT" | "PARENT"

export interface User {
  id: string; name: string; email: string
  role: UserRole; schoolId?: string; avatar?: string
}
export interface School {
  id: string; name: string; code: string
  address: string; phone: string; email: string
  principalName: string; studentCount: number
  teacherCount: number; createdAt: string
}
export interface Student {
  id: string; schoolId: string; name: string
  email: string; rollNumber: string; classId: string
  parentId?: string; dateOfBirth: string
  gender: "MALE" | "FEMALE" | "OTHER"
  status: "ACTIVE" | "INACTIVE" | "GRADUATED"; createdAt: string
}
export interface Teacher {
  id: string; schoolId: string; name: string; email: string
  employeeId: string; subjects: string[]; phone: string
  status: "ACTIVE" | "INACTIVE"; createdAt: string
}
export interface ApiResponse<T> { data: T; message: string; success: boolean }
export interface PaginatedResponse<T> {
  data: T[]; total: number; page: number; pageSize: number; totalPages: number
}
