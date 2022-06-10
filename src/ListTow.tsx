import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function ListTow() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...{ fo: '30', statu: 'NICE' },
    });
    console.log('searchParams', Object.fromEntries(searchParams));
  }, []);
  return (
    <div>
      <h1>
        ListId:
        {id}
      </h1>
      <h1>
        searchParams:
        {searchParams.get('statu')}
      </h1>
    </div>
  );
}

export default ListTow;
