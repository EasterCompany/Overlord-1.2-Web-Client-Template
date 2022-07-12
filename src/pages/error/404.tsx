import errorImg from '../../assets/error.svg';


const PageNotFoundError = () => <div className="error-page-content">
  <img
    src={errorImg}
    width="10%"
    alt="error"
  />
  <h2>Sorry!</h2>
  <h3>We can't find the page you're looking for.</h3>
</div>


export default PageNotFoundError;
