import { useParams, Navigate } from 'react-router-dom';
import { packages } from '../data/packages';
import PackageDetail from '../components/packages/PackageDetail';

const PackageDetailPage = () => {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === Number(id));

  if (!pkg) return <Navigate to="/packages" replace />;

  return <PackageDetail pkg={pkg} />;
};

export default PackageDetailPage;
