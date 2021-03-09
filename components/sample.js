// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Touchable,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from "react-native";
// import Form from "./components/Form";
// import AppBar from "./components/AppBar";
// import nextID from "react-id-generator";
// import { List } from "react-native-paper";

// export default function App() {
//   const [todos, setTodos] = useState([
//     { text: "M3 Homework", id: 1 },
//     { text: "Work on Flask React integration", id: 2 },
//   ]);
//   const handleSubmit = (text) => {
//     setTodos([...todos, { text, id: nextID() }]);
//   };

//   const handleDelete = (id) => {
//     setTodos((preveTods) => preveTods.filter((todo) => todo.id !== id));
//     Alert.alert(`Task #${id} is completed!`);
//   };
//   //
//   return (
//     <View style={styles.container}>
//       <AppBar />
//       <View style={styles.content}>
//         <Form handleSubmit={handleSubmit} />
//       </View>
//       <View>
//         <FlatList
//           data={todos}
//           renderItem={({ item }) => {
//             return (
//               <TouchableOpacity onLongPress={() => handleDelete(item.id)}>
//                 <List.Item
//                   title={item.text}
//                   style={styles.list}
//                   left={(props) => <List.Icon {...props} icon="book" />}
//                 />
//               </TouchableOpacity>
//             );
//           }}
//           keyExtractor={(item) => item.id}
//         />
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     padding: 40,
//   },
//   list: {
//     margin: 15,
//     borderColor: "#3333cc",
//     borderWidth: 1,
//   },
// });
