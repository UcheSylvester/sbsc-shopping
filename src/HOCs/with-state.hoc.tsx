import Spinner from "../components/spinner/spinner.component";

const WithState = (WrappedComponent: any) => {
  const withState = ({ isLoading, errorMessage, ...otherProps }: any) => {
    if (isLoading) return <Spinner isLarge />;

    if (errorMessage && !isLoading) return <h2>{errorMessage}</h2>;

    return <WrappedComponent {...otherProps} />;
  };

  return withState;
};

export default WithState;
