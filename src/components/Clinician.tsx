interface ComponentProps {
  record: {
    last_name: string;
    first_name: string;
    email: string;
    clinic_name: string;
    address1: string;
    address2: string;
    city: string;
    zip: string;
  };
}

const Clinician = ({ record }: ComponentProps) => {
  console.log(record);
  return (
    <div className="p-3">
      <header className="text-2xl">
        {record.last_name}, {record.first_name}
      </header>
      <div>
        <p>Email: {record.email}</p>
        {record.clinic_name && <p>Clinic Name: {record.clinic_name}</p>}
        <p>
          <span>{record.address1}</span>{' '}
          {record.address2 !== 'undefined' && <span>{record.address2}</span>}
        </p>
        <p>
          {record.city}, {record.zip}
        </p>
      </div>
    </div>
  );
};

export default Clinician;
