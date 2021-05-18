import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground, FlatList, TouchableOpacity,} from 'react-native';
import { styles } from  "./styles/styles";

import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="arrow-right" size={22} color="#000000" />;  








const data = [
{
  icon1: "sdffe",
  color:"red",
  

  title:"Jonah Geluk",
  description:"#invoice 0028",
  
  dollar:"$920.00",
  description2:"Due 20 days ago",


  
 
  icon2: "adfewr" ,
},

{
  icon1: "kjsf",
  color:"red",

  title:"Mike Edward",
  description:"#invoice 0033",
 
  dollar:"$1000.00",
  description2:"Due 23 days ago",
 
  icon2: "dded" ,
},

{
  icon1: "ddd",

  title:"Marketer",
  description:"#invoice 0035",
 
 dollar:"$1286.00",
 description2:"Due tomorrow",
 
  icon2: "ddd" ,
},

{
  icon1: "ddd",
 
  title:"Mike Edward",
  description:"#invoice 0035",

  dollar:"$320.00",
  description2:"Due tomorrow",


 
  icon2: "ddd" ,
},

{
  icon1: "ddd",
 
  title:" Mike Edward",
  description:"#invoice 0033",


  dollar:"$320.00",
  description2:"Due tomorrow",
  

  
  
  icon2: "ddd" ,
},

];



export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    data:data,
    paidView:true,
    backgroundColor:'white',
  };
  
  // onPress = () => {
    // this.setState({
      // count: this.state.true
    // });


}




  render( ) {
        
    return (
    
          <View style= {[styles.flexOne,styles.Margin10,styles.bgWhite]}>
         
                 <View style={[styles.flexThree,]}>
                    
                         <Text style={[styles.fontSize36,styles.fontWeight300,styles.marginTop32,]}>Invoices</Text>
             
                </View>
         
               

                <View style={[styles.flexOne,styles.bgGreyLight,styles.row,styles.radius16,styles.Margin10,]}>
               
                
               
                           <View style={[styles.flexOne,this.state.paidView ? styles.bgWhite:{backgroundColor:'transparent'}, styles.radius10,styles.margin6,styles.allCenter,]}>

                                 <TouchableOpacity onPress={()=> this.setState({ paidView: true})}>  
                
                                      <Text style={[styles.medium22,styles.fontSize23]}>Unpaid</Text>

                                </TouchableOpacity>           
              
                          </View>
              
                           <View style={[styles.flexOne,styles.allCenter,this.state.paidView ? {backgroundColor:'transparent'}: styles.bgWhite ]}>

                               <TouchableOpacity onPress={()=> this.setState({ paidView:false})}>
                   
                                     <Text style={[styles.fontSize25,styles.fontWeight900 ]}>Paid</Text>

                              </TouchableOpacity>
              
                          </View> 

                </View>

               <View style={[styles.downbox]}>
               
                  { this.state.paidView? 

                  <FlatList 
                           
                  // contentContainerStyle={{flex:1,}}
               
                 numColumns={1}

                 data={this.state.data}
                
                 renderItem={({item:rowData}) => {
                 
                 console.log('Image',rowData.imageUrl,rowData);
                
                 return(
                   
                   <View style={[styles.radius10,styles.margin6,styles.margin6,styles.flexOneAndHalf,styles.row]}>
                           
                           <View style={[styles.flexOne,styles.radius10,styles.margin6]}>
                                  
                                   <Image
                                          
                                              style={[styles.width90,styles.height95,styles.allCenter]}
                                 
                                              source={require('./img/img2.jpg')}
                                 

                                    />

                           </View>
                           
                           <View style={[styles.flexFour,]}>
                                    
                                     <Text style={[styles.flexOne,styles.fontSize19,styles.fontWeight600,]}>{rowData.title}</Text>
                                    
                                     <Text style={[styles.flexQuarterToOne,styles.fontSize15,styles.greenDark]}>{rowData.description}</Text>
                           
                           </View>
                          
                           <View style={[ styles.flexThree,]}>
                                     
                                      <Text style={[ styles.flexTwo,styles.fontSize19,styles. textRight,styles.fontWeight600, ]}>{rowData.dollar}</Text>
                              
                                      <Text style={[styles.flexOne,styles.fontSize15,styles.greenDark,styles.textRight]}>{rowData.description2}</Text>
                           
                           </View>
                  
                           <View style={[styles.flexOne,styles.radius10,styles.allCenter]}>
                            
                                       <Text style={[styles.fontSize19]}>{myIcon}</Text>
                           
                           </View>
                   
                   </View>
                   
                    )
                 
                 
                  }
                }

              /> 

              :null}
        
            </View>
      
      </View>
    );
  }
}

const styles =StyleSheet.create({
  // container: {
    // flex:1,
    // margin:15,
    // backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center',
  // },

  downbox:{
    flex:9,
    },
  

  // invocesbox:{
  
  // justifyContent:'center',
  // marginTop:10,
  // },

  // invocesbox1:{
  // marginTop:35,
  // },

  // buttonbox:{
    // flex:1,
    // flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center',
    // borderRadius:15,
    // marginTop:10,
    // marginBottom:10,
    // borderWidth:1,
  // },

  // unpaidbox:{
  // margin:5,
  // alignItems:'center',
  // justifyContent:'center',
  // },

  // paidbox:{
  //  alignItems:'center',
  //  justifyContent:'center',
  // },

  // padibox1:{
 
  // },



  // rowbox1:{
  // flex:1.5,
  // margin:5,
  // flexDirection:'row',
  // },

  // iconblock:{
  //  flex:1,
  //  borderRadius:15,
  //  margin:5,
  // },

//   middle:{
//  flex:4,
//    },

  // middletop:{
  //   flex:1,
  // },


  // middlebottom:{
  // flex:0.7,
  // },

  // dollar:{
  //   flex:3,
  // },

  // dollartop:{
  //   flex:2,
  // },

  // dollarbottom:{
  // flex:1,
  // },
});
