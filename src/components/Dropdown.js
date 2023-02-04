import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ScrollView
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  const Category = [
    {
      index: "1",
      name: "Travel",
  },
  {
      index: "2",
      name: "Art & craft",
  },
  {
      index: "3",
      name: "Technology",
  },
  {
      index: "4",
      name: "Lifestyle ",
  },
  {
      index: "5",
      name: "Sports ",
  },
  {
      index: "6",
      name: "Music ",
  },
  {
      index: "7",
      name: "Religion ",
  },
  ];
  const App = () => {
   
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(Category);
    const [selectedCategory, setSelectedCategory] = useState('');
   
   
  
    return (
      <ScrollView>
      <View style={{flex: 1}}>
        
        <TouchableOpacity
          style={{
            width: 390,
            height:60,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor:'white',
            elevation:20,
          }}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{fontWeight:'500',color:'purple'}}>
           Select Category
          </Text>
          {clicked ? (
          <Image
            source={require('../asset/upaar.png')}
            style={{width: 35, height: 35,marginRight:-4}}
          />
        ) : (
          <Image
            source={require('../asset/downarr.png')}
            style={{width: 35, height: 35,marginRight:-4}}
          />
        )}
          
        </TouchableOpacity>
      
        {clicked ? (
          <View
            style={{
              elevation: 4,
              marginTop: 10,
              height: 300,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
            }}>
      
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.6,
                      borderColor: '#8e8e8e',
                      marginTop:10,
                    }}
                    onPress={() => {
                      setSelectedCategory(item.Category);
                      setClicked(!clicked);
                    
                    }}>
                    <Text style={{fontWeight: '600',color:'purple'}}>{item.name}</Text>
                  </TouchableOpacity>
              
                );
              }}
            />
          </View>
        ) : null}
      </View>
      </ScrollView>
    );
  };
  
  export default App;