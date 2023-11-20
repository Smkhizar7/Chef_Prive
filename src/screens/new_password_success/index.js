import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {SuccessIcon} from '../../assets';
import {MediumText} from '../../components';
import {bgWhiteColor, textLightGreyColor} from '../../constants/colors';

const NewPasswordSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_content_container}>
        <Image source={SuccessIcon} style={styles.succes_icon} />
        <MediumText
          text={'Your password has been changed successfully'}
          style={styles.description_text}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: bgWhiteColor,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_content_container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  succes_icon: {
    marginTop: 120,
    width: 260,
    height: 186,
    resizeMode: 'contain',
  },
  description_text: {
    width: 260,
    marginTop: 25,
    marginBottom: 20,
    fontSize: 20,
    color: textLightGreyColor,
    textAlign: 'center',
  },
});

export default NewPasswordSuccess;
