import PropTypes from "prop-types";
import { Form } from "react-router-dom";

export default function Favorite({ contact }) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

Favorite.propTypes = {
  contact: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    avatar: PropTypes.string,
    twitter: PropTypes.string,
    notes: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};
