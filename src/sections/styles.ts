import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
  headerBackground: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    height: '15%',
    justifyContent: 'center'
  },
  headerTitle: {
    border: '1px solid white',
    color: 'white',
    fontSize: '24pt',
    paddingHorizontal: '60px',
    paddingVertical: '20px'
  },
  headerSubtitle: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '14pt',
    marginTop: '-15px',
    paddingHorizontal: '20px',
    paddingVertical: '5px'
  },
  headerLinks: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '12pt',
    textDecoration: 'none'
  },
  contentTitle: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '14pt',
    padding: '5px'
  },
  contentSubtitle: {
    fontSize: '12pt'
  },
  contentText: {
    fontSize: '11pt'
  }
});
