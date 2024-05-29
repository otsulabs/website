import ContentSection from './sections/Content';
import MainSection from './sections/Main';
import { useParams, Navigate } from 'react-router-dom';
import { jobs } from '../../jobs';

const CareerDetailsPage = () => {
  const { slug } = useParams();
  const job = jobs.find((item) => item.slug === slug);
  if (!job) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <MainSection job={job} />
      <ContentSection job={job} />
    </>
  );
};

export default CareerDetailsPage;
