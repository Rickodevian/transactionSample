import Colors from '../../Utils/Colors.utils';

export default {
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    marginBottom: 5,
    borderRadius: 5,
    paddingRight: 10
  },
  input: {
    flex: 1,
    height: 50,
  },
  searchIcon: {
    justifyContent: 'center',
    width: 35,
    paddingLeft: 10
  },
  sortButton: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  sortingWrapper: {
    flexDirection: 'row'
  },
  sortText: {
    color: Colors.orangeBright,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sortIcon: {
    marginLeft: 5
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: Colors.background,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5
  },
  radioContainer: {
    marginVertical: 10
  }
};
