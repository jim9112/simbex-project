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
    id_state: string;
  };
}

const Clinician = ({ record }: ComponentProps) => {
  console.log(record);
  return (
    <div className="p-3">
      <header className="text-2xl mb-3">
        {record.last_name}, {record.first_name}
      </header>
      <div className="pl-3 sm:flex">
        <div className="sm:w-96">
          <p>
            {' '}
            <span className="text-indigo-900">Email:</span>{' '}
            <span className="text-gray-500">{record.email}</span>
          </p>
          {record.clinic_name && (
            <p className="text-indigo-900">
              Clinic Name:{' '}
              <span className="text-gray-500">{record.clinic_name}</span>{' '}
            </p>
          )}
        </div>
        <div className="grid grid-flow-col w-max ">
          <p className="mr-1 text-indigo-900">Address: </p>
          <div className="text-gray-500">
            <p>
              <span>{record.address1}</span>{' '}
              {record.address2 !== 'undefined' && (
                <span>{record.address2}</span>
              )}
            </p>
            <p>
              {record.city}, {record.id_state.toUpperCase()} {record.zip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinician;
