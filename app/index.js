import { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import { Stack , useRouter } from 'expo-router';

import { COLORS, icons,images,SIZES } from '../constants';
import { Nearbyjobs , Popularjobs, ScreenHeaderBtn , Welcome} from '../components';




Home = () =>{
    const router = useRouter()
    const [searchTerm, setSearchTerm ] = useState('')
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
               options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () =>{
                    return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    // return <Text>Left Side</Text>
                },

                headerRight: () =>{
                    return <ScreenHeaderBtn iconUrl={images.mypics2.png} dimension="100%" />
                    // return <Text>Left Side</Text>
                },
                headerTitle: ""
               }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                    padding: SIZES.medium
                  }}
                
                >
                 <Welcome 
                   searchTerm={searchTerm}
                   setSearchTerm={setSearchTerm}
                   handleClick={()=>{
                    if(searchTerm){
                        router.push(`/search/${searchTerm}`)
                    }
                   }}
                    
                 />
                 <Popularjobs />
                 <Nearbyjobs />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home