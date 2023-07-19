import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}