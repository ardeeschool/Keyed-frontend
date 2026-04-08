import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from "@/types"
interface AuthState {
  user: User | null; selectedSchoolId: string | null
  setUser: (u: User | null) => void
  setSelectedSchool: (id: string) => void
  clear: () => void
}
export const useAuthStore = create<AuthState>()(persist(
  (set) => ({
    user: null, selectedSchoolId: null,
    setUser: (user) => set({ user }),
    setSelectedSchool: (selectedSchoolId) => set({ selectedSchoolId }),
    clear: () => set({ user: null, selectedSchoolId: null }),
  }),
  { name: "auth-store" }
))
