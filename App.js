import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground, FlatList, TouchableOpacity,} from 'react-native';
import { styles1 } from  "./styles/styles";

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
    
          <View style= {[styles1.flexOne,styles1.Margin10,styles1.bgWhite]}>
         
                 <View style={[styles1.flexThree,]}>
                    
                         <Text style={[styles1.fontSize36,styles1.fontWeight300,styles1.marginTop32,]}>Invoices</Text>
             
                </View>
         
               

                <View style={[styles1.flexOne,styles1.bgGreyLight,styles1.row,styles1.radius16,styles1.Margin10,]}>
               
                
               
                           <View style={[styles1.flexOne,this.state.paidView ? styles1.bgWhite:{backgroundColor:'transparent'}, styles1.radius10,styles1.margin6,styles1.allCenter,]}>

                                 <TouchableOpacity onPress={()=> this.setState({ paidView: true})}>  
                
                                      <Text style={[styles1.medium22,styles1.fontSize23]}>Unpaid</Text>

                                </TouchableOpacity>           
              
                          </View>
              
                           <View style={[styles1.flexOne,styles1.allCenter,this.state.paidView ? {backgroundColor:'transparent'}: styles1.bgWhite ]}>

                               <TouchableOpacity onPress={()=> this.setState({ paidView:false})}>
                   
                                     <Text style={[styles1.fontSize25,styles1.fontWeight900 ]}>Paid</Text>

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
                   
                   <View style={[styles1.radius10,styles1.margin6,styles1.margin6,styles1.flexOneAndHalf,styles1.row]}>
                           
                           <View style={[styles1.flexOne,styles1.radius10,styles1.margin6]}>
                                  
                                   <Image
                                          
                                              style={[styles1.width90,styles1.height95,styles1.allCenter]}
                                 
                                              source={require('./img/img2.jpg')}
                                 

                                    />

                           </View>
                           
                           <View style={[styles1.flexFour,]}>
                                    
                                     <Text style={[styles1.flexOne,styles1.fontSize19,styles1.fontWeight600,]}>{rowData.title}</Text>
                                    
                                     <Text style={[styles1.flexQuarterToOne,styles1.fontSize15,styles1.greenDark]}>{rowData.description}</Text>
                           
                           </View>
                          
                           <View style={[ styles1.flexThree,]}>
                                     
                                      <Text style={[ styles1.flexTwo,styles1.fontSize19,styles1. textRight,styles1.fontWeight600, ]}>{rowData.dollar}</Text>
                              
                                      <Text style={[styles1.flexOne,styles1.fontSize15,styles1.greenDark,styles1.textRight]}>{rowData.description2}</Text>
                           
                           </View>
                  
                           <View style={[styles1.flexOne,styles1.radius10,styles1.allCenter]}>
                            
                                       <Text style={[styles1.fontSize19]}>{myIcon}</Text>
                           
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
