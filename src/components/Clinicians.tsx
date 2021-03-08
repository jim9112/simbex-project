interface ComponentProps {
  data?: {} | null;
}

const Clinicians = ({ data }: ComponentProps) => {
  console.log(data);

  return (
    <div>
      <p>clinicians</p>
    </div>
  );
};

export default Clinicians;
