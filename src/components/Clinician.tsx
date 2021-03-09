interface ComponentProps {
  record: {
    last_name: string;
    first_name: string;
  };
}

const Clinician = ({ record }: ComponentProps) => {
  console.log(record);
  return (
    <h1>
      {record.last_name}, {record.first_name}
    </h1>
  );
};

export default Clinician;
