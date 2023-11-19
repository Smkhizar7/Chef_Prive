import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {LeftArrow} from '../../assets';
import {
  BoldText,
  IconButton,
  InputField,
  TouchableButton,
} from '../../components';
import {textBlackColor} from '../../constants/colors';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_content_container}>
        <View style={styles.heading_container}>
          <IconButton
            icon={<Image source={LeftArrow} style={styles.leftArrowIcon} />}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <BoldText text={'Forget Password'} style={styles.heading} />
        </View>
        <InputField
          label={'Email'}
          placeholder={'Email Address'}
          textContentType={'emailAddress'}
        />
        <TouchableButton
          text={'NEXT'}
          buttonStyle={styles.ForgetPasswordButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_content_container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  leftArrowIcon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: textBlackColor,
    marginLeft: 20,
  },
  ForgetPasswordButton: {
    marginTop: 20,
    marginBottom: 15,
  },
});

export default ForgetPassword;
