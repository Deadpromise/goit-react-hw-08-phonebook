import { CommonButton } from 'components/common/CommonButton.styled';
import { ContactLi, ContactInfo } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <ContactLi>
      <div>
        <ContactInfo>{`${name}:`}</ContactInfo>
        <ContactInfo>{phone}</ContactInfo>
      </div>
      <CommonButton type="button" onClick={onDelete}>
        DELETE
      </CommonButton>
    </ContactLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
export default ContactItem;
