import { StyleSheet} from 'react-native';
import FistScreen from './src/screen/FistScreen';
import Screen1_a from './src/screen/Screen1_a';
import Screen1_b from './src/screen/Screen1_b';
import Screen1_c from './src/screen/Screen1_c';

export default function App() {
  return (
    <>
      {/* <FistScreen/> */}
      {/* <Screen1_a/> */}
      {/* <Screen1_b/> */}
      <Screen1_c/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
