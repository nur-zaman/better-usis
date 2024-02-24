import BreadCrumb from "@/components/breadcrumb";
import FacultyInfoTable from "@/components/tables/faculty-info-table/faculty-info-table";

const breadcrumbItems = [{ title: "Contacts", link: "/dashboard/contacts" }];

export default async function page() {
  return (
    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />

      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <FacultyInfoTable />
      </div>
    </div>
  );
}
