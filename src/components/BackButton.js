import { useNavigation } from '@react-navigation/native';
import Card from './Card';
import MyIcon from './MyIcon';

export default function BackButton() {
  const nav = useNavigation();

  return (
    <Card
      borderRadius={30}
      marginVertical={15}
      style={{ padding: 8, backgroundColor: 'white' }}
      onPress={nav.goBack}
    >
      <MyIcon name='arrow-back' size={20} />
    </Card>
  );
}
