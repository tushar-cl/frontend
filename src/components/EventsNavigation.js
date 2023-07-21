import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={(isActive) => isActive ? classes.active : undefined}>All Event</NavLink>
            {/* <a href="/events">All Events</a> */}
          </li>
          <li>
          <NavLink to="/events/new" className={(isActive) => isActive ? classes.active : undefined}>New Event</NavLink>
            {/* <a href="/events/new">New Event</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
