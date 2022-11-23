import { FlatList, StyleSheet, Text, View } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Moviments from '../../components/moviments';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,00',
        date: '17/09/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'PIX Cliente X',
        value: '2.500,00',
        date: '17/09/2022',
        type: 1 // receitas/entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.280.89',
        date: '17/09/2022',
        type: 1 // receitas/entradas
    },
    {
      id: 4,
      label: 'Boleto  internet',
      value: '120,00',
      date: '17/09/2022',
      type: 0 // despesas
    }

]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Paulo"/>

      <Balance saldo='9.780,89' gastos='-345,00' />

      <Actions/>

      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator= {false}
        renderItem={({item}) => <Moviments data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14,
    marginBottom: 14
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});
