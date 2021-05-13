import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground, FlatList,} from 'react-native';
import { styles1 } from  "./styles/styles"  


const data = [
{
  icon1: "sdffe",
  description:"adsflew",
  


  title:"adfewf",
  icon2: "adfewr" ,
},

{
  icon1: "kjsf",
  description:"adsflew",
  


  title:"adfewf",
  icon2: "dded" ,
},

{
  icon1: "ddd",
  description:"adsflew",
  


  title:"adfewf",
  icon2: "ddd" ,
},

{
  icon1: "ddd",
  description:"adsflew",
  


  title:"adfewf",
  icon2: "ddd" ,
},

{
  icon1: "ddd",
  description:"adsflew",
  


  title:"adfewf",
  icon2: "ddd" ,
},

];



export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    data:data
  };
}


  render( ) {
        
    return (
    
          <View style= {styles.container}>
         
                 <View style={[styles1.flexThree,styles1.border,]}>
                    
                         <Text style={[styles1.fontSize36,styles1.fontWeight600,styles1.marginTop32,]}>Invoices</Text>
             
                </View>
         
                 <View style={[styles1.flexOne,styles1.border,styles1.bgGreyLight,styles1.row,styles1.radius16,styles1.Margin10,]}>
              
                           <View style={[styles1.flexOne,styles1.bgWhite,styles1.radius10,styles1.margin6,styles1.allCenter,]}>
                
                                      <Text style={[styles1.medium22,styles1.fontSize23]}>Unpaid</Text>
              
                          </View>
              
                           <View style={[styles1.flexOne,styles1.allCenter,]}>
                   
                                     <Text style={[styles1.fontSize25,styles1.fontWeight900]}>Paid</Text>
              
                          </View> 

                </View>

               <View style={[styles1.border,styles.downbox]}>
               
                  <FlatList 
                           
                  // contentContainerStyle={{flex:1,}}
               
                 numColumns={1}

                 data={this.state.data}
                
                 renderItem={({item:rowData}) => {
                 
                 console.log('Image',rowData.imageUrl,rowData);
                
                 return(
                   
                   <View style={[styles1.radius10,styles1.margin6,styles1.margin6,styles1.flexOneAndHalf,styles1.row,styles1.border,]}>
                           
                           <View style={[styles1.flexOne,styles1.radius10,styles1.margin6,styles1.border]}></View>
                           
                           <View style={[styles1.flexFour,styles1.border,]}>
                                    
                                     <Text style={[styles1.flexOne,styles1.fontSize19,styles1.border,]}>Jonak Geluk</Text>
                                    
                                     <Text style={[styles1.flexQuarterToOne,styles1.fontSize15,styles1.border,]}>#invoivr 0028</Text>
                           
                           </View>
                          
                           <View style={[ styles1.flexThree,styles1.border,]}>
                                     
                                      <Text style={[ styles1.flexTwo,styles1.fontSize19,styles1. textRight,styles1.border ]}>$920.00</Text>
                              
                                      <Text style={[styles1.flexOne,styles1.border,styles1.fontSize15]}>Due 20 days ago</Text>
                           
                           </View>
                  
                           <View style={[styles1.flexOne,styles1.radius10,styles1.border,]}></View>
                   
                   </View>
                   
                    )
                 
                 
                  }
                }

              /> 
        
            </View>
      
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    margin:15,
    backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center',
  },

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
