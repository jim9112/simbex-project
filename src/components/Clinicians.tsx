import Clinician from './Clinician';

interface ComponentProps {
  loading: boolean;
  userSearch: string;
  data?:
    | [
        record: {
          id: string;
          last_name: string;
          first_name: string;
          email: string;
          clinic_name: string;
          address1: string;
          address2: string;
          city: string;
          zip: string;
          id_state: string;
        }
      ]
    | null;
}

const Clinicians = ({ data, userSearch, loading }: ComponentProps) => {
  // sort data (clinician list) by last name
  const sortedData = data?.sort((a, b) =>
    a.last_name.localeCompare(b.last_name)
  );

  // return loading component if loading
  if (loading) {
    return <h1>Loading....</h1>;
  }

  // to do: ad in error component option

  // main component return
  return (
    <div className="divide-y-2">
      {data &&
        sortedData?.map((record) => {
          if (record.last_name.toLowerCase().includes(userSearch)) {
            return <Clinician key={record.id} record={record} />;
          }
        })}
    </div>
  );
};

export default Clinicians;
