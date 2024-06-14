import{StaylesSheet, Text,View} from 'react-native';
import react from 'react'
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 137,
            height: 25,
            backgroundColor: "red", 
            borderRadius: 25,
            marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            SIGN IN
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 137,
            height: 25,
            backgroundColor: "blue", 
            borderRadius: 25,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            SIGN UP
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;