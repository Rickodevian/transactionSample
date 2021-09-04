import Colors from '../../Utils/Colors.utils';

export default {
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.background,
    paddingHorizontal: 20
  },
  detailLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeDetail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailText: {
    fontSize: 14,
    color: Colors.orangeBright
  },
  titleContainer: {
    paddingVertical: 20,
    flexDirection: 'row'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5
  },
  transactionInfoContainer: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bankTransferContainer: {
    paddingVertical: 10,
    flexDirection: 'row'
  },
  transactionInfoTextContainer: {
    flexDirection: 'column'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 5
  },
  transactionContent: {
    fontSize: 14
  },
  bankProvider: {
    fontWeight: 'bold',
    fontSize: 16
  }
};
