const buttonType = type => {
  switch (type) {
    case 'success':
      return {
        backgroundColor: '#07bc20',
      };
    case 'pending':
      return {
        backgroundColor: '#F38309',
      };
    case 'pending_invert':
      return {
        backgroundColor: 'white',
        borderColor: '#F38309',
        borderWidth: 2,
      };
    default:
      return {
        backgroundColor: '#07bc20',
      };
  }
};

const textColor = type => {
  switch (type) {
    case 'pending_invert':
      return '#F38309';
    case 'success_invert':
      return '#07bc20';
    default:
      return 'white';
  }
};

export default {
  button: type => ({
    borderRadius: 5,
    backgroundColor: '#07bc20',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    ...buttonType(type),
  }),
  textColor: (type) => ({
    color: textColor(type),
    fontSize: 14,
  }),
};
