import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, PermissionsAndroid, Push } from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('notification - ', notification);
  },
});

const PushNotificationApp = () => {
  useEffect(() => {
    // requestNotifications(['alert', 'badge', 'sound']).then((res) => {
    //   console.log('res - ', res);
    // });
    // (async () => {
    //   try {
    //     const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
    //       title: 'Permision title',
    //       message: 'just message',
    //       buttonPositive: 'OK',
    //     });
    //     if (status === PermissionsAndroid.RESULTS.GRANTED) {
    //       console.log('status granted - ', status);
    //     } else {
    //       console.log('status denied - ', status);
    //     }
    //   } catch (error) {
    //     console.log('error - ', error);
    //   }
    // })();
    // PushNotification.localNotificationSchedule({
    //   title: 'Title notification',
    //   body: 'I am a body of notification',
    //   date: new Date(Date.now() + 10 * 1000),
    // });
  }, []);

  const triggerNotificationHandler = () => {
    // setTimeout(() => {
    //   Notify.Notifications.postLocalNotification({
    //     body: 'I am a body of notification',
    //     title: 'Title notification',
    //   });
    // }, 2000);

    PushNotification.localNotificationSchedule({
      title: 'Title notification',
      message: 'I am a body of notification',
      date: new Date(Date.now() + 10 * 1000),
    });
    // PushNotification.localNotification({
    //   title: 'Foreground title',
    //   message: 'Foreground message',
    // });
  };

  return (
    <View style={styles.screen}>
      <Text>PushNotificationApp</Text>
      <Button title="Trigger Notification" onPress={triggerNotificationHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PushNotificationApp;
