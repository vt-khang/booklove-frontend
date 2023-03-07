import Pagination from '@/components/Pagination';

export default function PaginationTest() {
  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Pagination total={10} />
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Pagination
          total={20}
          pageSize={5}
        />
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Pagination
          total={4}
          pageSize={6}
        />
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Pagination total={1} />
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Pagination
          total={1}
          hideOnSinglePage
        />
      </div>
    </>
  );
}
