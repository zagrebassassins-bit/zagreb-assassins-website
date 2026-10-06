import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminUpload from "./AdminUpload";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get("admin_session");

  if (adminSession?.value !== "authenticated") {
    redirect("/admin/login");
  }

  return <AdminUpload />;
}

