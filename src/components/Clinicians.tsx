import Clinician from './Clinician';

interface ComponentProps {
  data?:
    | [
        record: {
          id: string;
        }
      ]
    | null;
}

const Clinicians = ({ data }: ComponentProps) => {
  console.log(data);

  return (
    <div>
      {data &&
        data.map((record) => {
          return <Clinician key={record.id} record={record} />;
        })}
    </div>
  );
};

export default Clinicians;
