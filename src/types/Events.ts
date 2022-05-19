export interface Event {
  id: string;
  name: string;
  descripcion: string;
  admins: string[];
  members: string[];
  timeInit: Date;
  createdAt: Date;
  updatedAt: Date;
}
export type EventNew = Omit<
  Event,
  "updatedAt" | "createdAt" | "id" | "admins" | "members"
>;
export type eventData = Omit<Event, "createdAt" | "updatedAt">;
