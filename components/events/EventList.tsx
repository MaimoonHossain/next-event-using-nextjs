import EventItem from './EventItem';
import styles from './EventList.module.css';

export default function EventList(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem
          title={item.title}
          image={item.image}
          id={item.id}
          date={item.date}
          location={item.location}
          key={items.id}
        />
      ))}
    </ul>
  );
}

// title, image, date, location, id;
