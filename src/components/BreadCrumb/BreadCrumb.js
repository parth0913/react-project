import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Styles from'./BreadCrumb.module.css'

function Breadcrumbs() {
  return (
    <Breadcrumb className={Styles.Breadcrumb}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Birthday Flowers
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;