export const queryKeys = {
  schools:    { all: ["schools"] as const, list: (p?: object) => ["schools","list",p] as const, detail: (id: string) => ["schools","detail",id] as const },
  students:   { all: ["students"] as const, list: (sid: string, p?: object) => ["students",sid,"list",p] as const, detail: (id: string) => ["students","detail",id] as const },
  teachers:   { all: ["teachers"] as const, list: (sid: string) => ["teachers",sid,"list"] as const, detail: (id: string) => ["teachers","detail",id] as const },
  parents:    { all: ["parents"] as const, detail: (id: string) => ["parents","detail",id] as const },
  attendance: { byClass: (cid: string, d: string) => ["attendance",cid,d] as const, byStudent: (sid: string) => ["attendance","student",sid] as const },
  grades:     { byStudent: (sid: string) => ["grades","student",sid] as const, byClass: (cid: string) => ["grades","class",cid] as const },
}
