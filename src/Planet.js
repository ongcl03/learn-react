export const Planet = (props) => {
  return (
    <div>
      {props.isGasPlanet && props.name}
    </div>
  );
}