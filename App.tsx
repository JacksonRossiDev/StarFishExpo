import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore'

export default function App() {

  /////////////////////////////DECLARATIONS////////////////////////////////////////

//   // For adding a user to Firebase
//   const influencerName = "Tommy Rodberg New"
//   const age = 21 
//   const accountType = ["Fishing", "Boating", "Investing", "cars"]

//   // For adding a business to FireStore

//   const businessAccountName = "Strike Boating" 
//   const businessType = ["Fishing", "wildlife", "Boating"]


//   // Set Random Follower Totals for User and Business

//   let maxFollowerTotal = 10000
//   let minFollowerTotal = 400

//   let maxBusinessFollowerTotal = 5000
//   let minBusinessFollowerTotal = 100

//   // Generate equivalence value partitioning to determine max and min payment 
//   let maxPayment = 800
//   let minPayment = 100

//   // Generate equivalence value partitioning to determine max and min StarFish Score 

//   let maxStarFishScore = 100
//   let minStarFishScore = 1




// /////////////////////////////////////LOGIC////////////////////////////////////////////



//   // For generating random StarFish user's follower total 
//   const followerTotal = Math.floor(Math.random() * (maxFollowerTotal - minFollowerTotal + 1)) + minFollowerTotal
  
//   // FOr generating random StarFishScore value 
//   const BusinessfollowerTotal = Math.floor(Math.random() * (maxBusinessFollowerTotal - minBusinessFollowerTotal + 1)) + minBusinessFollowerTotal
//   const status = "approved"
//   // FOr generating random StarFishScore value 
//   const starFishScore = Math.floor(Math.random() * (maxStarFishScore - minStarFishScore + 1)) + minStarFishScore

//   // FOr generating random dollar value be
//   const price = "$" + Math.floor((Math.random() * (maxPayment - minPayment + 1)) + minPayment)

  
// ///////////////////////////////////////WRITE TO DATABASE (FIRESTORE)//////////////////////

//   const writeToFirestore = async () => {
//     try {
//       await firestore().collection('users').add({
//         influencerName: {influencerName},
//         age:{age}
//       })
//     }catch (error) {
//       console.log("Error", error)
//     }
//   }

//   const addPostingtoFireStore = async () => {
//     try {
//       await firestore().collection('listing').add({
//         influencerName: {influencerName},
//         followerTotal: {followerTotal},
//         starFishScore : {starFishScore},
//         price: {price},
//         accountType: {accountType},
        

//       })
//     }catch (error) {
//       console.log("Error", error)
//     }
//   }

//   const addBusinesstoFireStore = async () => {
//     try {
//       await firestore().collection('businessAccounts').add({
//         businessAccountName: {businessAccountName},
//         businessType: {businessType},
//         BusinessfollowerTotal: {BusinessfollowerTotal}

//       })
//     }catch (error) {
//       console.log("Error", error)
//     }
//   }

//   const addApprovedPost = async () => {
//     try {
//       await firestore().collection('postApprovals').add({
//         accounts: [{influencerName}, {businessAccountName} ],
//         price: {price},
//         businessType:{businessType},
//         status: {status},
//         influencerType: {accountType}

//       })
//     }catch (error) {
//       console.log("Error", error)
//     }
//   }


//   // General DB Add 
//   const writeToDatabase = async () => {
//     try {
//       await database().ref('users/123').set({
//         name: 'Tommy Rodburg',
//         age:22
//       });
//       console.log("success");
//     } catch (error) {
//       console.log('error: ', error)
//     }
//   }

  

  return (
    <View style={styles.container}>
      <Text>Adding Users and Listings Test 7-28-2022</Text>
      <Button title="Click Here to Send to atabase" ></Button>
      <Button title="Click Here to Send a New User to Firestore" ></Button>
      <Button title="Click Here to Add a Business to Firestore" ></Button>
      <Button title="Click Here to Add a Listing" ></Button>
      <Button title="Click Here to Business to Buy a Post" ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
