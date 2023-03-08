import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbItem from '@/components/BreadcrumbItem';

export default function BreadcrumbTest() {
  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Category</BreadcrumbItem>
          <BreadcrumbItem>View</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Category</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
}
