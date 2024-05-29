import { useMediaQuery } from 'usehooks-ts';
import ListTable from '../../../../components/ListTable';
import style from './List.module.scss';
import { jobs } from '../../../../jobs';

const ListSection = () => {
  const colWidth = [460, 470];
  const isMobile = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.list}>
      <ListTable.Base className={style.list__content}>
        {isMobile ? (
          <>
            {jobs.map((item, index) => (
              <ListTable.Mobile
                key={index}
                to={`/careers/${item.slug}`}
                title={item.title}
                text={item.text}
              />
            ))}
          </>
        ) : (
          <>
            <ListTable.Head
              customColWidth={colWidth}
              headings={['Title', 'Team', 'Location']}
            />
            {jobs.map((item, index) => (
              <ListTable.Row
                key={index}
                to={`/careers/${item.slug}`}
                customColWidth={colWidth}
              >
                <ListTable.Item>{item.title}</ListTable.Item>
                <ListTable.Item>{item.team}</ListTable.Item>
                <ListTable.Item>{item.generallocation}</ListTable.Item>
              </ListTable.Row>
            ))}
          </>
        )}
      </ListTable.Base>
    </section>
  );
};

export default ListSection;
