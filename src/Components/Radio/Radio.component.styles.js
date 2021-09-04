import Colors from '../../Utils/Colors.utils';

export default {
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.orangeBright,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  selected: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.orangeBright,
  },
  text: {
    marginRight: 35,
    fontSize: 20,
    color: Colors.orangeBright,
    fontWeight: '700',
  }
}
