import Colors from '../../Utils/Colors.utils';
import Constants from '../../Constants/Constants';

export default {
  container: status => ({
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor:
      status === Constants.TRANSACTION_STATUS.SUCCESS
        ? Colors.greenBright
        : Colors.orangeBright,
  }),
  transactionSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  transactionInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  transactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionBank: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  transactionText: {
    fontSize: 16,
  },
  transactionContainer: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
};
