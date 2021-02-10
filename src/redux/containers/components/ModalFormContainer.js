import { connect } from "react-redux";

import { createProperty } from "../../properties/properties-actions";

import ModalForm from "../../../components/common/ModalForm/ModalForm";

const mapStateToProps = (propertyState, modalFormProps) => {
  return modalFormProps;
};

const mapDispatchToProps = (dispatch) => ({
  createProperty: (newProperty) => dispatch(createProperty(newProperty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
