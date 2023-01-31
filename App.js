import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductList from './ProductList';

export default function App() {
  const[switchState,setSwitchState] = useState(false);
  return (
    <View style={styles.container}>
      
      <Text>Họ tên: Nguyễn Đình Quang</Text>
      <Text>Mã sinh viên: PH27050</Text>
      <Button title='Thêm mới'
      onPress={() => setSwitchState(!switchState)}/>
      {
        switchState
        ?
        <>
        <Text>Thêm mới</Text>
        <TextInput placeholder='Tên'/>
        <TextInput placeholder='Mô tả'/>
        <Button title='Hủy'/>
        <Button title='Lưu'/>
        </>
        :null
      }
      <ProductList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150
  },
});
