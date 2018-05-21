import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  RefreshControl,
  WebView,
  YellowBox,
  Button,
  Linking
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {KendinYaratScreen, YourMusicScreen,YourMusicDetailsScreen} from './KendinYaratScreen.js';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);



const styles= StyleSheet.create({
  textStyle:{
      color:'white',
      fontSize:16

  },
  menuTextStyle:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      fontFamily:'sans-serif-condensed'
  },
  boxStyle:{
      width:50,
      height:50,
      margin:10,
      borderRadius:6
 },
 boxButtonStyle:{flex: 2,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:6 }
});



class CategoryScreen extends React.Component {
  static navigationOptions = {
      title:'Ana Ekran',
    headerTitleStyle: {flex:1, textAlign: 'center', color:'white', fontFamily:'sans-serif-condensed', fontSize:22 },
      headerStyle: {
            backgroundColor: '#afd275',

    }
    };

  render(){
    return(
        <View style={{flex:10, backgroundColor:'#E7717d'}}>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1, marginLeft:15, marginRight:15, marginTop:10, borderRadius:6}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllMusic')} style={{flex:1, backgroundColor:'#fcb514',justifyContent:'center', alignItems:'center', borderRadius:6}}>
                          <Text style={styles.menuTextStyle}>
                          RASTGELE ÇAL
                          </Text>
                    </TouchableOpacity>
              </View>
              <View style={{flex:1, marginLeft:15, marginRight:15, marginTop:20, borderRadius:6}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllMusic')} style={{flex:1, backgroundColor:'#fcb514',justifyContent:'center', alignItems:'center', borderRadius:6}}>
                    <Text style={styles.menuTextStyle}>
                    ROCK ÇAL
                    </Text>
              </TouchableOpacity>
              </View>
              <View style={{flex:1, marginLeft:15, marginRight:15, marginTop:20, borderRadius:6}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllMusic')} style={{flex:1, backgroundColor:'#fcb514',justifyContent:'center', alignItems:'center', borderRadius:6}}>
                    <Text style={styles.menuTextStyle}>
                    POP ÇAL
                    </Text>
              </TouchableOpacity>
              </View>
              <View style={{flex:1, marginLeft:15, marginRight:15, marginTop:20, borderRadius:6}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('KendinYarat')} style={{flex:1, backgroundColor:'#fcb514',justifyContent:'center', alignItems:'center', borderRadius:6}}>
                    <Text style={styles.menuTextStyle}>
                    KENDİN OLUŞTUR
                    </Text>
              </TouchableOpacity>
              </View>
              <View style={{flex:4}}>
              </View>

        </View>
    );
  }
}

class AllMusicScreen extends React.Component<> {
  static navigationOptions = {
      title: 'Sıradaki şarkı sana gelsin!',
      headerStyle:{backgroundColor:'#E7717d', elevation:2 },
      headerTitleStyle: {textAlign: 'center', color:'white', fontSize:18 },
      headerTintColor:'white',
      headerRight: (<View></View>)

    };



  constructor(props){
    super(props);
    this.pressed=false;
    this.state = {
      music:['https://www.youtube.com/embed/IYnu4-69fTA',
            'https://www.youtube.com/embed/uWPhVk_lHdM','https://youtu.be/kLBWkM0jzK0'
            ,'https://youtu.be/9ZEURntrQOg','https://youtu.be/JeAtre3Bxg8','https://youtu.be/FVegcCcMNS4',
              'https://youtu.be/Lin-a2lTelg','https://youtu.be/f9bRmuP-kQY','https://youtu.be/LnHoqHscTKE',
              'https://youtu.be/7ge1yWot4cE',
              'https://youtu.be/d7jNDppSZ-I'],
      pressedBoxes: {},
      refreshing:false,
      invisibleBoxes:{}
    }
    this.onTap=this.onTap.bind(this);
    }


  _onRefresh() {
      this.setState({refreshing: true});
      this.yenile();
      this.setState({refreshing: false});
      }


  yenile(){

		this.setState({pressedBoxes:{}});
    this.setState({invisibleBoxes:{}});

  //  console.warn('yenileye girdi')
  }

  onTap=buttonId=>{
    const {pressedBoxes}=this.state;
    const {invisibleBoxes}=this.state;
    this.setState(
      {
        pressedBoxes:{...pressedBoxes,[buttonId]:!Boolean(pressedBoxes[buttonId]),
        },
      }
    );
    this.setState(
      {
          invisibleBoxes:{...invisibleBoxes,[buttonId]:'none',
        },
        },

    );

    //let rastgele=Math.floor(Math.random() * (this.state.music.length));
    //Linking.openURL(this.state.music[rastgele]);

  //  console.warn('pressed',!Boolean(pressedBoxes['a']));
    this.props.navigation.navigate('Details');

  }


  render() {
    return (
      <View style={{flex:1}}>

          <View style={{flex:14, justifyContent:'center', backgroundColor:'#afd275'}}>
            <ScrollView style={{marginTop:30}} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
                <View style={{height:80, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

                        <View style={styles.boxStyle}>
                            <TouchableOpacity onPress={()=>this.onTap('1')} disabled={this.state.pressedBoxes['1']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['1'],
                            backgroundColor: "#E7717d"}]}>
                                <Text style={[styles.textStyle,{fontSize:16}]}>
                                1
                                </Text>
                            </TouchableOpacity>
                            </View>
                        <View style={styles.boxStyle}>
                            <TouchableOpacity onPress={()=>this.onTap('2')} disabled={this.state.pressedBoxes['2']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['2'],
                            backgroundColor: "#e27d60",
                            }]}>
                                <Text style={styles.textStyle}>
                                2
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.boxStyle}>
                            <TouchableOpacity onPress={()=>this.onTap('3')} disabled={this.state.pressedBoxes['3']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['3'],
                            backgroundColor: "#c2b9b0",
                            }]}>
                                <Text style={styles.textStyle}>
                                3
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.boxStyle}>
                            <TouchableOpacity onPress={()=>this.onTap('4')} disabled={this.state.pressedBoxes['4']}  style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['4'],
                            backgroundColor: "#7e685a",
                            }]}>
                                <Text style={styles.textStyle}>
                                4
                                </Text>
                            </TouchableOpacity>

                        </View>
                </View>
                <View style={{height:80, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                          <View style={styles.boxStyle}>
                              <TouchableOpacity onPress={()=>this.onTap('5')} disabled={this.state.pressedBoxes['5']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['5'],
                              backgroundColor: "#E7717d"}]}>
                                  <Text style={styles.textStyle}>
                                  5
                                  </Text>
                              </TouchableOpacity>

                          </View>
                          <View style={styles.boxStyle}>
                              <TouchableOpacity onPress={()=>this.onTap('6')} disabled={this.state.pressedBoxes['6']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['6'],
                              backgroundColor: "#e27d60",
                              }]}>
                                  <Text style={styles.textStyle}>
                                  6
                                  </Text>
                              </TouchableOpacity>

                          </View>
                          <View style={styles.boxStyle}>
                              <TouchableOpacity onPress={()=>this.onTap('7')} disabled={this.state.pressedBoxes['7']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['7'],
                              backgroundColor: "#c2b9b0",
                              }]}>
                                  <Text style={styles.textStyle}>
                                  7
                                  </Text>
                              </TouchableOpacity>

                          </View>
                          <View style={{width:50, height:50, margin:10}}>
                              <TouchableOpacity onPress={()=>this.onTap('8')} disabled={this.state.pressedBoxes['8']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['8'],
                              backgroundColor: "#7e685a",
                              }]}>
                                  <Text style={styles.textStyle}>
                                  8
                                  </Text>
                              </TouchableOpacity>

                          </View>
                      </View>
                      <View style={{height:80, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                      <View style={styles.boxStyle}>
                                          <TouchableOpacity onPress={()=>this.onTap('9')} disabled={this.state.pressedBoxes['9']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['9'],
                                          backgroundColor: "#E7717d"}]}>
                                              <Text style={styles.textStyle}>
                                              9
                                              </Text>
                                          </TouchableOpacity>

                                      </View>
                                      <View style={styles.boxStyle}>
                                          <TouchableOpacity onPress={()=>this.onTap('10')} disabled={this.state.pressedBoxes['10']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['10'],
                                           backgroundColor: "#e27d60"}]}>
                                              <Text style={styles.textStyle}>
                                              10
                                              </Text>
                                          </TouchableOpacity>

                                      </View>
                                      <View style={styles.boxStyle}>
                                          <TouchableOpacity onPress={()=>this.onTap('11')} disabled={this.state.pressedBoxes['11']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['11'],
                                          backgroundColor: "#c2b9b0"}]}>
                                              <Text style={styles.textStyle}>
                                              11
                                              </Text>
                                          </TouchableOpacity>

                                      </View>
                                      <View style={{width:50, height:50, margin:10}}>
                                          <TouchableOpacity onPress={()=>this.onTap('12')} disabled={this.state.pressedBoxes['12']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['12'],
                                          backgroundColor: "#7e685a"}]}>
                                              <Text style={styles.textStyle}>
                                              12
                                              </Text>
                                          </TouchableOpacity>

                                      </View>
                                  </View>
                                  <View style={{height:80, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                                  <View style={styles.boxStyle}>
                                                      <TouchableOpacity onPress={()=>this.onTap('13')} disabled={this.state.pressedBoxes['13']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['13'],
                                                      backgroundColor: "#E7717d"}]}>
                                                          <Text style={styles.textStyle}>
                                                          13
                                                          </Text>
                                                      </TouchableOpacity>

                                                  </View>
                                                  <View style={styles.boxStyle}>
                                                      <TouchableOpacity onPress={()=>this.onTap('14')} disabled={this.state.pressedBoxes['14']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['14'],
                                                      backgroundColor: "#e27d60"}]}>
                                                          <Text style={styles.textStyle}>
                                                          14
                                                          </Text>
                                                      </TouchableOpacity>

                                                  </View>
                                                  <View style={styles.boxStyle}>
                                                  <TouchableOpacity onPress={()=>this.onTap('15')} disabled={this.state.pressedBoxes['15']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['15'],
                                                  backgroundColor: "#c2b9b0"}]}>
                                                          <Text style={styles.textStyle}>
                                                          15
                                                          </Text>
                                                      </TouchableOpacity>

                                                  </View>
                                                  <View style={{width:50, height:50, margin:10}}>
                                                  <TouchableOpacity onPress={()=>this.onTap('16')} disabled={this.state.pressedBoxes['16']} style={[styles.boxButtonStyle ,{display:this.state.invisibleBoxes['16'],
                                                  backgroundColor: "#7e685a"}]}>
                                                          <Text style={styles.textStyle}>
                                                          16
                                                          </Text>
                                                      </TouchableOpacity>

                                                  </View>
                                              </View>
                  </ScrollView>
          </View>

          <View style={{flex:2, backgroundColor:'#afd275', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>Linking.openURL('https://twitter.com/home?status=S%C4%B1radaki%20%C5%9Fark%C4%B1%20sana%20gelsin!%20'+this.state.music[Math.floor(Math.random() * (this.state.music.length))]+' @MizuharaDH')} >
                  <Image style={{width:80, height:80}}  source={require('C:/Users/u/Desktop/berkerproje/iki/src/image/twitterlogo.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={shareToWhatsApp = (text) => {Linking.openURL('whatsapp://send?text=Sıradaki şarkı sana gelsin! '+this.state.music[Math.floor(Math.random() * (this.state.music.length))]+' @SiradakiSarkiApp');}} >
                  <Image style={{width:60, height:60}}  source={require('C:/Users/u/Desktop/berkerproje/iki/src/image/whatsapplogo.png')}/>
              </TouchableOpacity>
          </View>

          <View style={{flex:3, backgroundColor:'#afd275', justifyContent:'flex-end'}}>


          </View>

      </View>
    );
  }

}

class DetailsScreen extends React.Component {
  static navigationOptions = {
      headerStyle: {
            backgroundColor: '#E7717d'

    },
    headerTintColor:'white'
    };


  constructor(props){
    super(props);
    this.pressed=false;
    this.state = {
      music:['https://www.youtube.com/embed/IYnu4-69fTA',
            'https://www.youtube.com/embed/uWPhVk_lHdM','https://www.youtube.com/embed/9ZEURntrQOg',
            'https://www.youtube.com/embed/GMezwtB1oCU','https://www.youtube.com/embed/jGjKXJOHhFs',
          'https://www.youtube.com/embed/U4JJNypZUOQ','https://www.youtube.com/embed/xS6V0waUtaQ',
          'https://www.youtube.com/embed/d7jNDppSZ-I','https://www.youtube.com/embed/FOt3oQ_k008',
          'https://www.youtube.com/embed/7ge1yWot4cE','https://www.youtube.com/embed/VTfQ7licgJ8',
          'https://www.youtube.com/embed/-btSJ5ews0A'],
            };
          }
  render() {
    return (
      <View style={{flex:10, backgroundColor:'#afd275'}}>
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#f7f7f7', fontSize:22, fontFamily:'sans-serif-condensed'}}>
      İşte senin şarkın!
      </Text>
      </View>
      <View style={{flex:5, marginLeft:8, marginRight:8}}>
      <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri:this.state.music[Math.floor(Math.random() * (this.state.music.length))]  }}

      />
      </View>
      <View style={{flex:3}}></View>


      </View>
    );
  }
}





const RootStack = createStackNavigator(
  {
    Category: CategoryScreen,
    AllMusic: AllMusicScreen,
    Details: DetailsScreen,
    KendinYarat:KendinYaratScreen,
    YourMusic:YourMusicScreen,
    YourMusicDetails:YourMusicDetailsScreen,

  },
  {
  initialRouteName: 'Category',
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
