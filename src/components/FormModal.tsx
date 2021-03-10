import useForm from '../utilities/useForm';

interface ComponentProps {
  setModalOpen: Function;
  userData: { data: any } | null;
  setUserData: Function;
}

const FormModal = ({ setModalOpen, userData, setUserData }: ComponentProps) => {
  const { inputs, handleChange } = useForm();
  //  add id to new record and surface onSubmit
  return (
    <div className="absolute pt-5 top-0 bg-black bg-opacity-80 w-full h-full z-10">
      <form
        className="bg-white w-max m-auto p-4"
        onSubmit={(e) => {
          e.preventDefault();
          const newUserData = userData;
          newUserData?.data.result.push(inputs);
          setUserData(newUserData);
          setModalOpen(false);
        }}>
        <h1 className="text-center">Add New Clinician</h1>
        <div className="grid sm:grid-cols-2">
          <label htmlFor="firstName">
            First Name
            <input
              className="border-b border-black"
              type="text"
              id="firstName"
              name="first_name"
              value={inputs.first_name ? inputs.first_name : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              className="border-b border-black"
              type="text"
              id="lastName"
              name="last_name"
              value={inputs.last_name ? inputs.last_name : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              className="border-b border-black"
              type="email"
              id="email"
              name="email"
              value={inputs.email ? inputs.email : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="clinic">
            Clinic
            <input
              className="border-b border-black"
              type="text"
              id="clinic"
              name="clinic_name"
              value={inputs.clinic_name ? inputs.clinic_name : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="address1">
            Address 1
            <input
              className="border-b border-black"
              type="text"
              id="address1"
              name="address1"
              value={inputs.address1 ? inputs.address1 : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="address2">
            Address 2
            <input
              className="border-b border-black"
              type="text"
              id="address2"
              name="address2"
              value={inputs.address2 ? inputs.address2 : ''}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="city">
            City
            <input
              className="border-b border-black"
              type="text"
              id="city"
              name="city"
              value={inputs.city ? inputs.city : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="State">
            State
            <input
              className="border-b border-black"
              type="text"
              id="state"
              name="state"
              value={inputs.state ? inputs.state : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="zip">
            Zipcode
            <input
              className="border-b border-black"
              type="text"
              id="zip"
              name="zip"
              value={inputs.zip ? inputs.zip : ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </button>{' '}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
