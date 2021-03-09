import Clinician from './Clinician';

interface ComponentProps {
  data?:
    | [
        record: {
          id: string;
          last_name: string;
          first_name: string;
        }
      ]
    | null;
}

const Clinicians = ({ data }: ComponentProps) => {
  // sort data (clinician list) by last name
  const sortedData = data?.sort((a, b) =>
    a.last_name.localeCompare(b.last_name)
  );

  return (
    <div>
      {data &&
        sortedData?.map((record) => {
          return <Clinician key={record.id} record={record} />;
        })}
    </div>
  );
};

export default Clinicians;
