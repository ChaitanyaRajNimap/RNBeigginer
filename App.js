import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TextInput,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  Switch,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import {Image} from 'react-native-remote-svg';
import FullName from './src/components/FullName';
import Slider from '@react-native-community/slider';
import {WebView} from 'react-native-webview';

function App() {
  //For storing data specific to component
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    name: '',
  });
  const [showModal, setShowModal] = useState(false); //For modal

  //For picker
  const [choosenLabel, setChoosenLabel] = useState('');
  const [choosenIndex, setChoosenIndex] = useState('2');
  const [data, setData] = useState([]); //For picker using api data

  //For slider
  const [sliderValue, setSliderValue] = useState(20);

  //For switch
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = value => {
    setSwitchValue(value);
  };

  useEffect(() => {
    //GET request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET', //Request type
    })
      .then(res => res.json())
      .then(resJson => setData(resJson))
      .catch(err => console.error(err));
  });

  const handleChange = text => {
    setName(prevName => {
      return {
        ...prevName,
        name: text,
      };
    });
  };

  const btnClickHandler = title => {
    Alert.alert('Alert for : ' + title);
  };

  return (
    // For preventing UI to render in safearea
    <SafeAreaView style={styles.rootContainer}>
      {/*For making overflowing content scollable */}
      <ScrollView style={styles.scrollView}>
        {/*For modal */}
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed!');
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Modal is opend!</Text>
              <View style={styles.button}>
                <Button
                  title="Close Modal"
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>

        {/*container to hold other components */}
        <View style={styles.viewContainer}>
          <Text style={styles.heading}>React Natice Component Demo</Text>
          {/* for displaying text */}
          <Text style={[styles.heading, styles.textContainer]}>
            {/* It supportes nesting of styling */}
            <Text>Nested Text </Text>
            <Text>Another nested text</Text>
          </Text>
          <Text style={{color: '#f00', fontSize: 20}}>Outside text</Text>

          {/*Using state to hold and manage container specific data  */}
          <Text style={styles.heading}>Count : {count}</Text>
          <Button
            title="Increment Count"
            onPress={() => setCount(prevCount => prevCount + 1)}
          />

          {/*Passing props using custom fullname component */}
          <FullName fName="Monkey D." lName="Luffy" />
        </View>

        {/*For getting user input data */}
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#0f0',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {name.name}
          </Text>
        </View>
        <TextInput
          value={name.name}
          //With using onChange
          // onChange={event => {
          //   return handleChange(event.nativeEvent.text);
          // }}
          onChangeText={handleChange}
          placeholder="Your name"
          style={styles.input}
        />

        {/*For showing images */}
        {/*For static image resources */}
        <View style={styles.imagesContainer}>
          <Image
            source={require('./src/assets/images/luffy.jpg')}
            style={styles.image}
          />
        </View>

        {/*For network request for image */}
        <View style={styles.imagesContainer}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
            }}
            style={styles.image}
          />
        </View>

        {/*For uri data image */}
        <View style={styles.imagesContainer}>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
            style={styles.image}
          />
        </View>

        {/*For svg image install :- npm install react-native-remote-svg --save  */}
        <View style={styles.imagesContainer}>
          <Image
            source={require('./src/assets/images/birdsvg.jpg')}
            style={styles.image}
          />
        </View>

        {/*To perfom click event and overcome styling */}
        {/*Using touchable native feedback */}
        <TouchableNativeFeedback
          onPress={() => btnClickHandler('TouchableNativeFeedback Pressed!')}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Touchable Native Feedback</Text>
          </View>
        </TouchableNativeFeedback>

        {/*Using touchable highlight */}
        <TouchableHighlight
          onPress={() => btnClickHandler('TouchableHighlight Pressed!')}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </View>
        </TouchableHighlight>

        {/*Using touchable opacity */}
        <TouchableOpacity
          onPress={() => btnClickHandler('TouchableOpacity Pressed!')}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>

        {/*Using touchable without feedback */}
        <TouchableWithoutFeedback
          onPress={() => btnClickHandler('TouchableWithoutFeedback Pressed!')}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Touchable Without Feedback</Text>
          </View>
        </TouchableWithoutFeedback>

        {/*For opening Modal */}
        <View style={styles.button}>
          <Button
            title="Open Modal"
            onPress={() => {
              setShowModal(!showModal);
            }}
          />
        </View>

        {/*For picker = component for selection between different choices same as a Dropdown */}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Choosen label : {choosenLabel}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Choosen Index : {choosenIndex}</Text>
        </View>
        {/*Using Multiple options */}
        {/* <Picker
          selectedValue={choosenLabel}
          onValueChange={(itemValue, itemIndex) => {
            setChoosenLabel(itemValue);
            setChoosenIndex(itemIndex);
          }}
          style={styles.picker}>
          <Picker.Item label="Luffy" value="Luffy" />
          <Picker.Item label="Zoro" value="Zoro" />
          <Picker.Item label="Nami" value="Nami" />
          <Picker.Item label="Usopp" value="Usopp" />
          <Picker.Item label="Sanji" value="Sanji" />
          <Picker.Item label="Chopper" value="Chopper" />
          <Picker.Item label="Robin" value="Robin" />
          <Picker.Item label="Franky" value="Franky" />
          <Picker.Item label="Brook" value="Brook" />
          <Picker.Item label="Jimbe" value="Jimbe" />
        </Picker> */}
        {/*Using data through api */}
        <Picker
          selectedValue={choosenLabel}
          onValueChange={(itemValue, itemIndex) => {
            setChoosenLabel(itemValue);
            setChoosenIndex(itemIndex);
          }}
          style={styles.picker}>
          {data.map(item => {
            return <Picker.Item value={item.id} label={item.title} />;
          })}
        </Picker>

        {/*For switch =  component for getting/showing the boolean value or to select from one out of two. */}
        <Text style={styles.heading}>
          {switchValue ? 'Switch is ON' : 'Switch is OFF'}
        </Text>
        <Switch
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={switchValue}
        />

        {/*For slider = component to select a single value from a range of values */}
        <Text style={styles.heading}>Value of slider is : {sliderValue}</Text>
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000"
          step={1}
          value={sliderValue}
          onValueChange={sliderValue => setSliderValue(sliderValue)}
          style={styles.slider}
        />

        {/*For webView = component to render the web page into your mobile app */}
        <View style={styles.webViewConatiner}>
          <WebView
            source={{uri: 'https://aboutreact.com'}}
            style={styles.webView}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {flex: 1},
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    paddingHorizontal: 10,
    marginVertical: 5,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    margin: 10,
    padding: 10,
    borderColor: '#0f0',
    borderWidth: 2,
    borderRadius: 15,
    color: '#000',
  },
  imagesContainer: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderColor: '#00f',
    borderRadius: 15,
    borderWidth: 2,
  },
  btnContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#00f',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    padding: 20,
    borderColor: '#f00',
    borderWidth: 2,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  modalText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {margin: 20},
  picker: {
    margin: 20,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#DDD',
  },
  switch: {margin: 30, alignSelf: 'center'},
  slider: {margin: 30},
  webViewConatiner: {
    height: 400,
    width: 200,
    margin: 40,
  },
  webView: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 2,
  },
});
