import{
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from 'react-native';
const ProductList = (props) =>{
    const ProductList = [
        {
            id: 1,
            name: 'Tên: Đình Quang',
            des: 'Mô tả: Bị cận'
        },
        {
            id: 2,
            name: 'Tên: Xuân Huy',
            des: 'Mô tả: Râu quai nón'
        }
    ];

    return(
        <SafeAreaView>
            <FlatList 
                data={ProductList}
                //renderItem cho 1 object chứa {item} trả về view
                renderItem={({item}) => (
                    <View><Text>{item.name}</Text>
                    <Text>{item.des}</Text></View>
                )}
                //key cho item và trả về 1 giá trị là duy nhất
                keyExtractor={(item) => item.id}// id là thuộc tính 
            />
        </SafeAreaView>
    )

};
export default ProductList;

const styles = StyleSheet.create({});