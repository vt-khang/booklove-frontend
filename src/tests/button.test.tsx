import Button from '@/components/Button';

export default function ButtonTest() {
  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Button onClick={() => alert('Now')}>L O G I N</Button>
        <Button type="outline">L O G I N</Button>
        <Button type="text">L O G I N</Button>
        <Button type="link">L O G I N</Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Button shape="round">L O G I N</Button>
        <Button shape="circle">L O G I N</Button>
        <Button
          type="outline"
          shape="round"
        >
          L O G I N
        </Button>
        <Button
          type="outline"
          shape="circle"
        >
          L O G I N
        </Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Button
          onClick={() => alert('Now')}
          disabled
        >
          L O G I N
        </Button>
        <Button
          type="outline"
          disabled
        >
          L O G I N
        </Button>
        <Button
          type="text"
          disabled
        >
          L O G I N
        </Button>
        <Button
          type="link"
          disabled
        >
          L O G I N
        </Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Button
          onClick={() => alert('Now')}
          loading
        >
          L O G I N
        </Button>
        <Button loading={{ delay: 5000 }}>L O G I N</Button>
        <Button
          type="text"
          loading={{ delay: 5000 }}
        >
          L O G I N
        </Button>
        <Button
          type="link"
          loading={{ delay: 5000 }}
        >
          L O G I N
        </Button>
      </div>
    </>
  );
}
